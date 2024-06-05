const orderModel = require("../../models/order");

const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find();
    res.json({
      orders,
      message: "All Orders",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = getAllOrders;
