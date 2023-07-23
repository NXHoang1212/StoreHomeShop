const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShippingSchema = new Schema({
  // Tên vận chuyển
  name: { type: String, required: true },
  // Số ngày giao hàng
  duration: { type: Number, required: true },
  // Giá tiền vận chuyển
  price: { type: Number, required: true },
});

module.exports = mongoose.model('shipping', ShippingSchema);
