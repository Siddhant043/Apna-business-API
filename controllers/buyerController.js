import User from "../models/userModel.js";
//Buyer function
export const getListOfSellers = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (currentUser.category === "buyer") {
      const allSellers = await User.find({ category: "seller" });
      res.status(201).json({
        status: "success",
        sellers: allSellers,
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const getSellerCatalog = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    console.log(currentUser);
    if (currentUser.category === "buyer") {
      const candidateId = req.params["seller_id"];
      if (!(await User.findOne({ _id: candidateId }))) {
        res.status(401).json({
          status: "failed",
          error: "Seller does not exist",
        });
      }
      const seller = await User.findOne({ _id: candidateId });
      res.status(201).json({
        status: "success",
        catalog: seller.catalog,
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const createBuyerOrder = async (req, res) => {
  try {
    const currentUser = await User.findOne({ _id: req.userId });
    if (currentUser.category === "buyer") {
      const candidateId = req.params["seller_id"];
      const { productName } = req.body;

      //checking if seller or product is present or not
      if (!(await User.find({ _id: candidateId }))) {
        res.status(401).json({
          status: "failed",
          error: "Seller does not exist",
        });
      }
      const seller = await User.findOne({ _id: candidateId });
      // checking if the product is in the array or not
      let count = 0;
      seller.catalog.map((obj) => {
        if (obj.productName === productName) {
          count++;
        }
      });
      if (count === 0) {
        res.status(401).json({
          status: "failed",
          error: "Product does not exist",
        });
      }
      //if product exists
      const newOrders = [...seller.orders, productName];
      await User.updateOne(
        { _id: candidateId },
        { $set: { orders: newOrders } }
      );
      res.status(201).json({
        status: "success",
        messege: "Done",
      });
    }
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};
