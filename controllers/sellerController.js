import User from "../models/userModel.js";

//Seller functions
export const createSellerCatalog = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (currentUser.category === "seller") {
      const { productName, productPrice } = req.body;
      const newCatalog = [
        ...currentUser.catalog,
        { productName, productPrice },
      ];
      await User.updateOne(
        { _id: req.userId },
        { $set: { catalog: newCatalog } }
      );
      res.status(201).json({
        status: "success",
        newCatalog,
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const getSellerOrders = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (currentUser.category === "seller") {
      res.status(201).json({
        status: "success",
        orders: currentUser.orders,
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};
