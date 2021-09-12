import express from "express";
import auth from "../middleware/auth.js";

import {
  createBuyerOrder,
  getListOfSellers,
  getSellerCatalog,
} from "../controllers/buyerController.js";

//Routes
const router = express.Router();

//middleware

router.route("/list-of-sellers").get(auth, getListOfSellers);
router.route("/seller-catalog/:seller_id").get(auth, getSellerCatalog);
router.route("/create-order/:seller_id").post(auth, createBuyerOrder);

export default router;
