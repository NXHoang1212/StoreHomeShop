const promoService = require('../service/PromoService');

// Tạo mã giảm giá mới
const createPromoController = async (req, res) => {
    try {
        const { code, discount, validUntil } = req.body;
        const promo = await promoService.createPromo(code, discount, validUntil);
        res.status(201).json(promo);
    } catch (error) {
        res.status(500).json({ error: 'Failed to create promo' });
    }
};

//lấy tất cả các mã giảm giá
const getAllPromo = async (req, res) => {
    try {
        const promos = await promoService.getAllPromo();
        res.status(200).json(promos);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get all promo' });
    }
};

// Áp dụng mã giảm giá vào giá
const applyPromoController = async (req, res) => {
    try {
        const { promoCode, price } = req.body;
        const result = await promoService.applyPromo(promoCode, price);
        res.status(200).json(result);
        console.log(result);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Failed to apply promo' });
    }
};

module.exports = { createPromoController, applyPromoController, getAllPromo };
