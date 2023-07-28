var express = require('express');
const promoController = require('../controller/PromoController');

var router = express.Router();

// Tạo mã giảm giá mới
router.post('/createpromo', promoController.createPromoController);

//lấy tất cả các mã giảm giá
//http://localhost:3000/promo/getallpromo
router.get('/getallpromo', promoController.getAllPromo);

// Áp dụng mã giảm giá vào giá
//http://localhost:3000/promo/apply
router.post('/apply', promoController.applyPromoController);

module.exports = router;
