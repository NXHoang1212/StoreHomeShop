var express = require('express');
var favouriteController = require('../controller/FavouriteController');

var router = express.Router();

// Route để thêm sản phẩm vào danh sách yêu thích
//http://localhost:3000/heart/:userId/AddFavourites
router.post('/:userId/AddFavourites', favouriteController.addToFavourite);

// Route để lấy danh sách yêu thích của người dùng
//http://localhost:3000/heart/:userId/GetFavourites
router.get('/:userId/GetFavourites', favouriteController.getFavouritesByUserId);

// Route để xóa sản phẩm khỏi danh sách yêu thích
//http://localhost:3000/heart/:userId/RemoveFavourites
router.delete('/:userId/RemoveFavourites', favouriteController.removeFromFavourite);

//Route để ra sản phẩm yêu thích chi tiết
//http://localhost:3000/heart/:userId/GetFavourites/:productId


module.exports = router;
