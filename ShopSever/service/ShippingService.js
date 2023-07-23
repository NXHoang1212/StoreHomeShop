const ShippingModel = require('../model/ShippingModel');

const createShippingService = async (name, duration, isDomestic) => {
  const price = calculatePrice(duration, isDomestic);

  const shipping = new ShippingModel({
    name,
    duration,
    isDomestic,
    price,
  });

  await shipping.save();

  return shipping;
};

const getShippingById = async (shippingId) => {
  try {
    const shipping = await ShippingModel.findById(shippingId);
    if (!shipping) {
      throw new Error('Invalid shipping ID');
    }
    return shipping;
  } catch (error) {
    throw new Error('Failed to get shipping');
  }
};

const getShippingService = async () => {
  const shippings = await ShippingModel.find();
  return shippings;
};

const calculatePrice = (duration, isDomestic) => {
  let price = 0;

  if (isDomestic) {
    if (duration >= 1 && duration <= 2) {
      price = 50;
    } else if (duration >= 2 && duration <= 3) {
      price = 70;
    } else {
      // Giá mặc định cho trong nước (không thuộc 2 khoảng trên)
      price = 0;
    }
  } else {
    // Giá mặc định cho ngoài nước
    // Giá tính theo số ngày
    const pricePerDay = 30; // Giả sử giá 30 USD cho mỗi ngày
    price = duration * pricePerDay;
  }

  return price;
};

module.exports = { createShippingService, getShippingService, getShippingById };
