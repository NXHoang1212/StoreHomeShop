const Promo = require('../model/PromoModel');

// Tạo mã giảm giá mới
const createPromo = async (code, discount, validUntil) => {
    try {
        const promo = new Promo({ code, discount, validUntil });
        return await promo.save();
    } catch (error) {
        throw new Error('Failed to create promo');
    }
};

//lấy tất cả các mã giảm giá
const getAllPromo = async () => {
    try {
        return await Promo.find();
    } catch (error) {
        throw new Error('Failed to get all promo');
    }
};


// Áp dụng mã giảm giá vào giá
const applyPromo = async (promoCode, price) => {
    try {
        const promo = await Promo.findOne({ code: promoCode });
        if (!promo) {
            throw new Error('Invalid promo code');
        }
        const discountedPrice = price - (price * promo.discount) / 100;
        console.log(discountedPrice);
        return { promoCode, originalPrice: price, discountedPrice };
    } catch (error) {
        console.log(error);
        throw new Error('Failed to apply promo');
    }
};

module.exports = { createPromo, applyPromo, getAllPromo };
