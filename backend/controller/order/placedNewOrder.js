const orderModel = require("../../models/order");

const placedNewOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderPrice, orderItems, address } = req.body;

    const newOrder = orderModel.create({
      orderPrice,
      customer: userId,
      orderItems,
      address,
    });

    res.json({
      newOrder,
      message: "Order created successfully",
      success: true,
      error: false,
    });
  } catch (error) {
    res.json({
      message: error.message,
      success: false,
      error: true,
      data: null,
    });
  }
};

module.exports = placedNewOrder;
