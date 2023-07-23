const shippingController = require('../service/ShippingService');

const createShippingController = async (req, res) => {
  try {
    const { name, duration } = req.body;
    const shipping = await shippingController.createShippingService(name, duration);
    res.status(201).json(shipping);
    console.log(shipping);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create shipping' });
    console.log(error);
  }
};

const getShippingController = async (req, res) => {
  try {
    const shippings = await shippingController.getShippingService();
    res.status(200).json(shippings);
    console.log(shippings);
  } catch (error) {
    res.status(500).json({ error: 'Failed to get shippings' });
    console.log(error);
  }
};

module.exports = { createShippingController, getShippingController };
