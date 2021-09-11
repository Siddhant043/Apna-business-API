import express from "express";
import {
  checkBody,
  createSellerCatalog,
  getSellerOrders,
} from "../controllers/sellerController.js";

const router = express.Router();
router.route("/create-catalog").post(checkBody, createSellerCatalog);
router.route("/orders").get(getSellerOrders);

export default router;
