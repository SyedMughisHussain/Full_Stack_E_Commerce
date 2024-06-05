const orderModel = require("../../models/order");

const getOrdersByUser = async (req, res) => {
  try {
    const userId = req.userId;
    const allOrders = await orderModel.find({
      customer: userId,
    });

    res.json({
      message: "All Orders",
      success: true,
      orders: allOrders,
    });
  } catch (error) {
    res.json({
      message: "Something went wrong",
      success: false,
      error: true,
      data: null,
    });
  }
};

module.exports = getOrdersByUser;
