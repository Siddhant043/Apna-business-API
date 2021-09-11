//Buyer function
export const getListOfSellers = (req, res) => {
  res.status(201).json([{ sellerId1: "abcd1" }, { sellerId2: "abcd2" }]);
};

export const getSellerCatalog = (req, res) => {
  res.status(201).json([
    {
      product: "ProductName",
      buyer: "BuyerName",
    },
    {
      product: "ProductName",
      buyer: "BuyerName2",
    },
  ]);
};

export const createBuyerOrder = (req, res) => {
  console.log(req.body);
  res.send("Order done");
};
