const { createCanvas } = require('canvas');
const OrderModel = require('../model/OrderModel');
const moment = require('moment');
const paypal = require('paypal-rest-sdk');
const { upload, uploadToCloudinary } = require('../middleware/CloudinaryUpload');
const JsBarcode = require('jsbarcode');
const Razorpay = require('razorpay')

var razorpay = new Razorpay({
    key_id: 'rzp_test_x6V407sUQIe5BV',
    key_secret: 'JKJoiBQUiVsv10rCDgUSG3bJ'
})

paypal.configure({
    mode: 'sandbox', // Hoặc 'live' trong môi trường thực tế
    client_id: 'AQBGJCGJpTraHvp99lZDXdkZ9oJQabezxx1uG0kb36IxJG4oSMQPdSvK4MHA0GcbtPIV9FwZLYQ4s9CG',
    client_secret: 'EKcUdlbkLVEwK63HST9MKrW2gzwpeU79tU14Y0b9l37_-0jfluYKGn0ya4lJk6gN6EGEtVPM3tZgWTte',
});

// Tạo thanh toán PayPal và trả về URL thanh toán
const createPaypalPayment = async (userId) => {
    try {
        // Lấy thông tin đơn hàng từ cơ sở dữ liệu
        const order = await OrderModel.findOne({ userId, status: 'pending' })
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            console.log('Không tìm thấy đơn hàng');
            return;
        }
        // Trích xuất thông tin đơn hàng
        const { products, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng products
        const transactionItems = products.map((item) => ({
            name: item.name,
            sku: item._id,
            price: item.price,
            currency: 'USD',
            quantity: item.quantity,
        }));
        // Tính tổng tiền cuả transactionItem (tổng tiền sản phẩm) và phí ship và mã giảm giá nếu có
        let itemTotal = transactionItems.reduce((total, item) => total + item.price * item.quantity, 0);
        let transactionTotal = itemTotal + shippingId.price;
        let transactionDetails = {
            subtotal: itemTotal.toFixed(2),
            tax: '0.00',
            shipping: shippingId.price.toFixed(2),
        };
        // Kiểm tra nếu có mã giảm giá
        if (promoCode) {
            const discount = promoCode.discount;
            transactionTotal -= discount;
            transactionDetails.discount = discount.toFixed(2);
        }
        // Tạo một payment request với thông tin sản phẩm
        const createPaymentJson = {
            intent: 'sale',
            payer: {
                payment_method: 'paypal',
            },
            redirect_urls: {
                return_url: 'http://localhost:3000/order/success',
                cancel_url: 'http://localhost:3000/order/cancel',
            },
            transactions: [
                {
                    item_list: {
                        items: transactionItems,
                    },
                    amount: {
                        currency: 'USD',
                        total: transactionTotal.toFixed(2),
                        details: transactionDetails,
                    },
                },
            ],
        };
        // Gửi yêu cầu tạo thanh toán PayPal
        return new Promise((resolve, reject) => {
            paypal.payment.create(createPaymentJson, (error, payment) => {
                if (error) {
                    reject(error);
                    console.log(error.response.name);
                    console.log(error.response.details);
                    console.log(error.response.details[0].issue);
                } else {
                    // Lưu thông tin thanh toán vào đơn hàng
                    order.products = products;
                    order.paymentMethod = 'paypal';
                    order.save();
                    // Tìm kiếm URL thanh toán trong response
                    const { links } = payment;
                    let paymentUrl = null;
                    links.forEach((link) => {
                        if (link.rel === 'approval_url') {
                            paymentUrl = link.href;
                        }
                    });
                    resolve(paymentUrl);
                    console.log('URL thanh toán:', paymentUrl);
                }
            });
        });
    } catch (error) {
        throw error;
    }
};

//Tạo thanh toán razorpay 
const createRazorpayPayment = async (userId) => {
    try {
        // Lấy thông tin đơn hàng của userId từ cơ sở dữ liệu
        const order = await OrderModel.findOne({ userId })
            .populate('products')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        // Trích xuất các thông tin cần thiết từ đơn hàng
        const { _id: orderId, total } = order;
        // Tạo payment order với thông tin đơn hàng
        const paymentOrder = await razorpay.orders.create({
            amount: total * 100, // Số tiền cần thanh toán (đơn vị là cents nếu sử dụng USD)
            currency: 'USD', // Đơn vị tiền tệ
            receipt: orderId.toString(), // Mã đơn hàng hoặc mã giao dịch để Razorpay theo dõi (phải là chuỗi)
        });
        // Lưu mã payment order vào đơn hàng
        order.paymentMethod = 'razorpay'; // Gán phương thức thanh toán là 'razorpay'
        order.razorpayOrderId = paymentOrder.id; // Lưu mã payment order vào đơn hàng
        await order.save();
        // Trả về thông tin payment order để client thực hiện thanh toán
        return paymentOrder;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo thanh toán Razorpay');
    }
};

// Xác nhận thanh toán Razorpay
const confirmRazorpayPayment = async (paymentId, payerId) => {
    try {
        // Gọi API của Razorpay để kiểm tra thông tin thanh toán
        const payment = await razorpay.payments.fetch(paymentId);
        if (payment.status === 'captured' && payment.paid && payment.payer_id === payerId) {
            // Thực hiện các hành động cần thiết khi thanh toán thành công
            const order = await OrderModel.findOneAndUpdate({ paymentId, payerId }, { $set: { paymentStatus: 'paid' } });
            return order;
        } else {
            throw new Error('Thanh toán không thành công hoặc thông tin không hợp lệ');
        }
    } catch (error) {
        throw error;
    }
};

// Xác nhận thanh toán PayPal lấy thông tin thanh toán
const executePaypalPayment = async (paymentId, payerId) => {
    try {
        const encodedPaymentId = encodeURIComponent(paymentId);
        const encodedPayerId = encodeURIComponent(payerId);
        // Gửi yêu cầu xác nhận thanh toán
        paypal.payment.execute(encodedPaymentId, { payer_id: encodedPayerId }, async (error) => {
            if (error) {
                console.log(error);
                throw error;
            } else {
                console.log('Thanh toán thành công');
                //lưu paymentMethod và paymentStatus vào đơn hàng
            }
        });
    } catch (error) {
        console.log(error);
        throw error;
    }
};

// Tạo mã barcode ngẫu nhiên và lưu vào đơn hàng
const createBarcode = async (orderId) => {
    try {
        const order = await OrderModel.findById(orderId);
        // Tạo mã đơn hàng (transaction ID)
        const transactionId = generateTransactionId();
        // Lưu mã đơn hàng vào đơn hàng
        order.TransactionId = transactionId;
        console.log('Mã đơn hàng:', transactionId);
        await order.save();
        // Tạo mã barcode ngẫu nhiên chứa 14 ký tự số 
        const barcode = Math.floor(Math.random() * 10000000000000).toString();
        // Tạo mã vạch
        const canvas = createCanvas();
        JsBarcode(canvas, barcode, { format: 'MSI11', displayValue: true });
        const buffer = canvas.toBuffer('image/png');
        const file = {
            path: `data:image/png;base64,${buffer.toString('base64')}`,
        };
        // Tải lên hình ảnh mã vạch lên Cloudinary
        const imageUrl = await uploadToCloudinary(file);
        // Lưu đường dẫn hình ảnh vào đơn hàng
        order.barcode = imageUrl;
        await order.save();
        // Trả về đường dẫn hình ảnh mã vạch cho client
        return imageUrl;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo mã vạch');
    }
};


// Hàm tạo mã đơn hàng (transaction ID)
const generateTransactionId = () => {
    const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const randomLetters = letters.charAt(Math.floor(Math.random() * letters.length)) +
        letters.charAt(Math.floor(Math.random() * letters.length));
    const randomNumbers = Math.random().toString().substr(2, 10);
    return randomLetters + randomNumbers;
};


// Gọi thanh toán PayPal
const payWithPaypal = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId })
            .populate('products')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            console.log('Không tìm thấy đơn hàng');
            return;
        }
        const { products, total, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng cart.productId
        const transactionItems = products.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            currency: 'USD',
        }));
        const paymentUrl = await createPaypalPayment(userId, transactionItems, total, addressId, shippingId, promoCode);
        console.log('URL thanh toán:', paymentUrl);
        return paymentUrl;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi gọi thanh toán PayPal');
    }
};

// Tạo một đơn hàng mới
const createOrder = async (userId, cart, total, addressId, shippingId, promoCode) => {
    try {
        // Trích xuất thông tin sản phẩm từ giỏ hàng
        const products = cart.map((item) => ({
            name: item.name,
            image: item.image,
            quantity: item.quantity,
            price: item.price,
        }));
        // Tạo một đơn hàng mới với thông tin sản phẩm
        const orderHour = moment().format('HH:mm A');
        const timeBuy = moment().format('MMM D, YYYY');
        const order = await OrderModel.create({ userId, products, total, addressId, shippingId, promoCode, orderHour, timeBuy });
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi tạo đơn hàng');
    }
};


// Cập nhật thông tin đơn hàng trạng thái đơn hàng
const updateOrder = async (orderId, status, paymentStatus) => {
    try {
        const order = await OrderModel.findById(orderId);
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        order.status = status;
        order.paymentStatus = paymentStatus;
        await order.save();
        console.log('Đơn hàng đã được cập nhật:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi cập nhật đơn hàng');
    }
};

// Xóa đơn hàng
const deleteOrder = async (orderId) => {
    try {
        const order = await OrderModel.findByIdAndDelete(orderId);
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Đơn hàng đã được xóa:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi xóa đơn hàng');
    }
};

// //lịch sử thanh toán
const getOrderHistory = async (userId) => {
    try {
        const order = await OrderModel.find({ userId })
            .populate('products')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Lịch sử thanh toán:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
};


// //chi tiết lịch sử thanh toán
const getOrderHistoryDetail = async (orderId) => {
    try {
        const order = await OrderModel.findById(orderId)
            .populate('products')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Chi tiết lịch sử thanh toán:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
};

// Lấy thông tin tất cả đơn hàng theo ID
const getOrderById = async (userId) => {
    try {
        const order = await OrderModel.findOne({ userId })
            .populate('products')
            .populate('addressId')
            .populate('shippingId')
            .populate('promoCode');
        if (!order) {
            throw new Error('Không tìm thấy đơn hàng');
        }
        console.log('Thông tin đơn hàng:', order);
        return order;
    } catch (error) {
        console.log(error);
        throw new Error('Lỗi khi lấy thông tin đơn hàng');
    }
}
module.exports =
{
    createOrder, updateOrder, deleteOrder,
    createPaypalPayment, executePaypalPayment,
    payWithPaypal, getOrderHistory,
    createBarcode, getOrderHistoryDetail, getOrderById, createRazorpayPayment, confirmRazorpayPayment
};