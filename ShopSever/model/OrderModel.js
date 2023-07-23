const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const OrderSchema = new Schema({
    userId: { type: ObjectId, ref: 'user' },
    products: [
        {
            productId: { type: ObjectId, ref: 'product' },
            name: { type: String },
            image: { type: String },
            price: { type: Number },
            quantity: { type: Number },
        },
    ],
    total: { type: Number, default: 0 },
    addressId: { type: ObjectId, ref: 'address' },
    shippingId: { type: ObjectId, ref: 'shipping' },
    promoCode: { type: ObjectId, ref: 'promo', default: null },
    status: { type: String, default: 'pending' },
    paymentMethod: { type: String, default: 'cod' },
    paymentStatus: { type: String, default: 'unpaid' },
    payerId: { type: String }, // Thêm trường payerId
    paymentId: { type: String }, // Thêm trường paymentId
    //Thêm trường thời gian mua ngày 10/12/2020
    timeBuy: { type: String },
    // Thêm trường orderHour để lưu giờ đặt đơn hàng
    orderHour: { type: String },
    // Thêm trường barcode để lưu mã vạch
    barcode: { type: String, default: null },
    //mã đơn hàng
    TransactionId: { type: String, default: null },
});

module.exports = mongoose.model('order', OrderSchema);
