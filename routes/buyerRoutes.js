import express from "express";
import {
  createBuyerOrder,
  getListOfSellers,
  getSellerCatalog,
} from "../controllers/buyerController.js";

//Routes
const router = express.Router();

//middleware
router.param("seller_id", (req, res, next, val) => {
  console.log("Seller id is - " + val);
  next();
});

router.route("/list-of-sellers").get(getListOfSellers);
router.route("/seller-catalog/:seller_id").get(getSellerCatalog);
router.route("/create-order/:seller_id").post(createBuyerOrder);

export default router;
