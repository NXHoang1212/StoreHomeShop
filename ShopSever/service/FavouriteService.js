const favouriteModel = require('../model/FavouriteModel');

// Thêm sản phẩm vào danh sách yêu thích
const addToFavourite = async (userId, productId) => {
  try {
    let favourite = await favouriteModel.findOne({ userId });
    
    if (!favourite) {
      // Nếu chưa tồn tại danh sách yêu thích cho userId, tạo mới
      favourite = await favouriteModel.create({ userId, productId: [productId] });
    } else {
      // Nếu đã tồn tại danh sách yêu thích
      if (!favourite.productId) {
        // Nếu mảng productId chưa được khởi tạo, tạo mới và thêm sản phẩm vào
        favourite.productId = [productId];
      } else {
        // Nếu mảng productId đã tồn tại, thêm sản phẩm mới vào mảng
        favourite.productId.push(productId);
      }
      await favourite.save();
    }
    
    return favourite;
  } catch (error) {
    throw error;
  }
};


// Lấy danh sách yêu thích của người dùng với thông tin name, price và image của sản phẩm
const getFavouritesByUserId = async (userId) => {
  try {
    const favourites = await favouriteModel.findOne({ userId })
      .populate({
        path: 'productId',
        select: 'name price image',
        populate: {
          path: 'categoryId',
          select: 'name'
        }
      });
    return favourites;
  } catch (error) {
    throw error;
  }
};


// Xóa sản phẩm khỏi danh sách yêu thích
const removeFromFavourite = async (userId, productId) => {
  try {
    const favourite = await favouriteModel.findOne({ userId });
    
    if (favourite) {
      // Nếu tồn tại danh sách yêu thích, xóa sản phẩm khỏi mảng productIds
      favourite.productId = favourite.productId.filter(id => id.toString() !== productId);
      await favourite.save();
    }
    
    return { message: 'Product removed from favourites' };
  } catch (error) {
    throw error;
  }
};

module.exports = {
  addToFavourite,
  getFavouritesByUserId,
  removeFromFavourite
};
