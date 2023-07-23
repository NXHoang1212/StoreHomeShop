const favouriteService = require('../service/FavouriteService');

// Thêm sản phẩm vào danh sách yêu thích
const addToFavourite = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const result = await favouriteService.addToFavourite(userId, productId);
    res.status(200).json(result);
    console.log(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy danh sách yêu thích của người dùng với thông tin name, price và image của sản phẩm
const getFavouritesByUserId = async (req, res, next) => {
  try {
    const userId = req.params.userId;
    // Gọi service để lấy danh sách yêu thích của người dùng
    const favourites = await favouriteService.getFavouritesByUserId(userId);
    // Trả về danh sách yêu thích
    res.status(200).json(favourites);
    console.log(favourites);
  } catch (error) {
    res.status(500).json({ error: error.message });
    next(error);
  }
};

// Xóa sản phẩm khỏi danh sách yêu thích
const removeFromFavourite = async (req, res) => {
  const { userId, productId } = req.body;
  try {
    const result = await favouriteService.removeFromFavourite(userId, productId);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  addToFavourite,
  getFavouritesByUserId,
  removeFromFavourite
};
