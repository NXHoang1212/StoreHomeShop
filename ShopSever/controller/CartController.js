const cartService = require('../service/CartService');

//thêm sản phẩm vào giỏ hàng
const addToCart = async (req, res) => {
  const { userId, productId, quantity } = req.body;
  try {
    const cart = await cartService.addToCart(userId, productId, quantity);
    console.log(cart);
    res.status(200).json({ cart });
  } catch (error) {
    res.status(500).json({ error: 'Error adding to cart' });
    console.log(error);
  }
};
//cập nhật số lượng sản phẩm trong giỏ hàng
const updateCartItem = async (req, res) => {
  try {
    const { userId, productId, quantity } = req.body;
    const updatedCart = await cartService.updateCartItem(userId, productId, quantity);
    res.json(updatedCart);
    console.log(updatedCart);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error updating cart item' });
  }
};
//xóa 1 sản phẩm trong giỏ hàng
const removeCartItem = async (req, res) => {
  try {
    const { userId, productId } = req.body;
    const updatedCart = await cartService.removeCartItem(userId, productId);
    res.json(updatedCart);
    console.log(updatedCart);
  } catch (error) {
    res.status(500).json({ error: 'Error removing cart item' });
  }
};
//lấy danh sách sản phẩm trong giỏ hàng
const getCartItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await cartService.getCartItems(userId);
    res.json(cartItems);
    console.log(cartItems);
  } catch (error) {
    res.status(500).json({ error: 'Error getting cart items' });
  }
};

//xóa toàn bộ giỏ hàng của userId
const removeAllCartItems = async (req, res) => {
  try {
    const { userId } = req.params;
    const cartItems = await cartService.removeAllCartItems(userId);
    res.json(cartItems);
    console.log(cartItems);
  }
  catch (error) {
    res.status(500).json({ error: 'Error removing all cart items' });
  }
};

module.exports = { addToCart, updateCartItem, removeCartItem, getCartItems, removeAllCartItems };
