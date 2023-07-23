const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PromoSchema = new Schema({
  code: { type: String, required: true }, // Mã khuyến mãi
  discount: { type: Number, required: true }, // Tỷ lệ giảm giá (phần trăm)
  validUntil: { type: Date, required: true }, // Ngày hết hạn
});

module.exports = mongoose.model('promo', PromoSchema);
