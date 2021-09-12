import User from "../models/userModel.js";

//Seller functions
export const createSellerCatalog = async (req, res) => {
  try {
    const { productName, productPrice } = req.body;
    const candidateId = req.params["seller_id"];
    if (!(await User.findOne({ _id: candidateId }))) {
      res.status(401).json({
        status: "failed",
        error: "Seller does not exists",
      });
    }
    const seller = await User.findOne({ _id: candidateId });
    const newCatalog = [...seller.catalog, { productName, productPrice }];
    await User.updateOne(
      { _id: candidateId },
      { $set: { catalog: newCatalog } }
    );
    res.status(201).json({
      status: "success",
      newCatalog,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const getSellerOrders = async (req, res) => {
  try {
    const candidateId = req.params["seller_id"];
    if (!(await User.findOne({ _id: candidateId }))) {
      res.status(401).json({
        status: "failed",
        error: "Seller does not exists",
      });
    }

    const seller = await User.findOne({ _id: candidateId });
    res.status(201).json({
      status: "success",
      orders: seller.orders,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};
