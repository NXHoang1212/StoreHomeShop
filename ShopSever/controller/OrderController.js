
const orderService = require('../service/OrderService');

// Tạo một đơn hàng mới
const createOrder = async (req, res) => {
    try {
        const { userId } = req.params;
        const { products, total, addressId, shippingId, promoCode, } = req.body
        // Gọi service để tạo đơn hàng
        const order = await orderService.createOrder(userId, products, total, addressId, shippingId, promoCode);
        res.status(200).json(order);
        console.log('Đơn hàng mới:', order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi tạo đơn hàng' });
    }
};

// Gọi thanh toán PayPal
const payWithPaypal = async (req, res) => {
    try {
        const { userId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderById(userId);
        const { products, total, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng cart.productId
        const items = products.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            currency: 'USD',
        }));
        // Gọi service để tạo thanh toán PayPal với thông tin sản phẩm, địa chỉ và phí ship
        const paymentUrl = await orderService.payWithPaypal(userId, items, total, addressId, shippingId, promoCode);
        console.log('URL thanh toán:', paymentUrl);
        res.redirect(paymentUrl);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi gọi thanh toán PayPal' });
    }
};

// Gọi thanh toán Razorpay
const payWithRazorpay = async (req, res) => {
    try {
        const { userId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderById(userId);
        const { products, total, addressId, shippingId, promoCode } = order;
        // Trích xuất thông tin sản phẩm từ mảng cart.productId
        const items = products.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price,
            currency: 'USD',
        }));
        // Gọi service để tạo thanh toán Razorpay với thông tin sản phẩm, địa chỉ và phí ship
        const paymentOrder = await orderService.createRazorpayPayment(userId, items, total, addressId, shippingId, promoCode);
        console.log('Razorpay payment order:', paymentOrder);
        res.status(200).json({ paymentOrder });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi gọi thanh toán Razorpay' });
    }
};

// Xác nhận thanh toán Razorpay
const confirmRazorpayPayment = async (req, res) => {
    try {
        const { paymentId, payerId } = req.query;
        // Gọi service để xác nhận thanh toán Razorpay
        const order = await orderService.confirmRazorpayPayment(paymentId, payerId);
        res.status(200).json({ message: 'Thanh toán thành công', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi xác nhận thanh toán Razorpay' });
    }
};


// Lấy thông tin đơn hàng theo ID
const getOrderById = async (req, res) => {
    try {
        const { userId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderById(userId);
        res.status(200).json(order);
        console.log('Thông tin đơn hàng:', order);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi lấy thông tin đơn hàng' });
    }
};

// Cập nhật thông tin đơn hàng
const updateOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const { status, paymentStatus } = req.body;
        // Gọi service để cập nhật thông tin đơn hàng
        const updatedOrder = await orderService.updateOrder(orderId, status, paymentStatus);
        res.status(200).json(updatedOrder);
        console.log('Đơn hàng đã được cập nhật:', updatedOrder);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi cập nhật đơn hàng' });
    }
};

// Xóa đơn hàng
const deleteOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        // Gọi service để xóa đơn hàng
        await orderService.deleteOrder(orderId);
        res.status(200).json({ message: 'Xóa đơn hàng thành công' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi xóa đơn hàng' });
    }
};

// Xác nhận thanh toán PayPal
const confirmPaypalPayment = async (req, res) => {
    try {
        const { paymentId, PayerID } = req.query;
        const encodedPaymentId = encodeURIComponent(paymentId);
        const encodedPayerID = encodeURIComponent(PayerID);
        // Gọi service để xác nhận thanh toán PayPal
        const order = await orderService.executePaypalPayment(encodedPaymentId, encodedPayerID);
        res.status(200).json({ message: 'Thanh toán thành công', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi xác nhận thanh toán PayPal' });
    }
};


//lịch sử thanh toán
const getOrderHistory = async (req, res) => {
    try {
        const { userId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderHistory(userId);
        res.status(200).json({ message: 'Đơn hàng đã thanh toán', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi lấy thông tin đơn hàng' });
    }
};

//chi tiết lịch sử thanh toán
const getOrderHistoryDetail = async (req, res) => {
    try {
        const { orderId } = req.params;
        // Gọi service để lấy thông tin đơn hàng
        const order = await orderService.getOrderHistoryDetail(orderId);
        res.status(200).json({ message: 'Chi tiết đơn hàng đã thanh toán', order });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi lấy thông tin đơn hàng' });
    }
};

//tao mã vạch
const createBarcode = async (req, res) => {
    try {
        const { orderId } = req.params;
        // Gọi service để tạo mã vạch và lưu vào đơn hàng
        await orderService.createBarcode(orderId);
        // Phản hồi thành công
        res.status(200).json({ message: 'Tạo mã vạch thành công' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Lỗi khi tạo mã vạch' });
    }
};


module.exports =
{
    createOrder, getOrderById,
    updateOrder, deleteOrder,
    payWithPaypal, confirmPaypalPayment, getOrderHistory,
    createBarcode, getOrderHistoryDetail, payWithRazorpay, confirmRazorpayPayment
};
