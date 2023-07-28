const express = require('express');
const router = express.Router();
const orderController = require('../controller/OrderController');


// Tạo đơn hàng mới
//http://localhost:3000/order/:userId/addorder
router.post('/:userId/addorder', orderController.createOrder);

// // Cập nhật thông tin đơn hàng
//http://localhost:3000/order/:userId/updateOrder
router.post('/:userId/updateOrder/:orderId', orderController.updateOrder);

// Xóa đơn hàng
//http://localhost:3000/order/:userId/removeOrder
router.delete('/:userId/deleteOrder/:orderId', orderController.deleteOrder);

// Gọi thanh toán PayPal
//http://localhost:3000/order/:userId/payWithPaypal
router.get('/:userId/payWithPaypal', orderController.payWithPaypal);

// Xác nhận thanh toán PayPal
//http://localhost:3000/order/success
router.get('/success', orderController.confirmPaypalPayment);

// Xác nhận thanh toán Razorpay
router.get('/order/razorpay/confirm', orderController.confirmRazorpayPayment);

// Gọi thanh toán PayPal
router.get('/order/paypal/pay/:userId', orderController.payWithPaypal);

// Hủy thanh toán PayPal
//http://localhost:3000/order/cancel
router.get('/cancel', function (req, res, next) {
    res.send('cancel');
});

//lịch sử thanh toán
//http://localhost:3000/order/:userId/getOrderHistory
router.get('/:userId/getOrderHistory', orderController.getOrderHistory);

//chi tiết lịch sử thanh toán
//http://localhost:3000/order/:userId/getOrderHistoryDetail
router.get('/:userId/getOrderHistoryDetail/:orderId', orderController.getOrderHistoryDetail);

// tạo mã vạch
//http://localhost:3000/order/:userId/getBarcode
router.post('/:userId/createBarcode/:orderId', orderController.createBarcode);



module.exports = router;
