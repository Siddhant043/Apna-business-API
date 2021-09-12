import express from "express";
import {
  createSellerCatalog,
  getSellerOrders,
} from "../controllers/sellerController.js";

const router = express.Router();
router.route("/create-catalog/:seller_id").post(createSellerCatalog);
router.route("/orders/:seller_id").get(getSellerOrders);

export default router;
