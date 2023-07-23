const express = require('express');
const router = express.Router();
const shippingController = require('../controller/ShippingController');

// Endpoint tạo mới shipping
//http://localhost:3000/shipping/addshipping
router.post('/addshipping', shippingController.createShippingController);

// Endpoint lấy danh sách shipping
router.get('/getshipping', shippingController.getShippingController);

module.exports = router;
