const orderModel = require("../../models/order");

const placedNewOrder = async (req, res) => {
  try {
    const userId = req.userId;
    const { orderPrice, productId, quantity, address } = req.body;

    const newOrder = orderModel.create({});

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

modeule.exports = placedNewOrder;
