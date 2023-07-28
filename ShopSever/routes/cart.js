var express = require('express');
var router = express.Router();
const CartController = require('../controller/CartController');

// Định nghĩa các route
router.post('/:userId/addtocart', CartController.addToCart);


router.post('/:userId/updatecartitem', CartController.updateCartItem);


router.delete('/:userId/removecartitem', CartController.removeCartItem);


router.get('/:userId/getcartitems', CartController.getCartItems);

//xóa toàn bộ giỏ hàng của userId
//http://localhost:3000/cart/:userId/removeallcartitems
router.delete('/:userId/removeallcartitems', CartController.removeAllCartItems);


module.exports = router;
