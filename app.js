import express, { response } from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("dev"));
app.use(express.json()); //Help in json post req

//middlewares

app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});

//Seller functions
const createSellerCatalog = (req, res) => {
  console.log(req.body);
  res.send("Done");
};

const getSellerOrders = (req, res) => {
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

//Buyer function
const getListOfSellers = (req, res) => {
  res.status(201).json([{ sellerId1: "abcd1" }, { sellerId2: "abcd2" }]);
};

const getSellerCatalog = (req, res) => {
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

const createBuyerOrder = (req, res) => {
  console.log(req.body);
  res.send("Order done");
};

//Routes
//sellers
const sellerRouter = express.Router();
app.use("/api/seller", sellerRouter);

sellerRouter.route("/create-catalog").post(createSellerCatalog);
sellerRouter.route("/orders").get(getSellerOrders);

//buyers
const buyerRouter = express.Router();
app.use("/api/buyer", buyerRouter);

buyerRouter.route("/list-of-sellers").get(getListOfSellers);
buyerRouter.route("/seller-catalog/:seller_id").get(getSellerCatalog);
buyerRouter.route("/create-order/:seller_id").post(createBuyerOrder);

const port = 3000;
app.listen(port, () => {
  console.log("Apna business backend initialized");
});
