import Seller from "../models/sellerModel.js";

//Seller functions
export const checkBody = (req, res, next) => {
  if (!req.body.name || !req.body.price) {
    return res.status(400).json({
      status: "fail",
      message: "Missing name or price",
    });
  }
  next();
};
export const createSellerCatalog = (req, res) => {
  console.log(req.body);
  res.send("Done");
};

export const getSellerOrders = (req, res) => {
  res.status(201).json({
    orders: [
      {
        product: "ProductName",
        buyer: "BuyerName",
      },
      {
        product: "ProductName",
        buyer: "BuyerName2",
      },
    ],
  });
};
