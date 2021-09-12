import express from "express";
import auth from "../middleware/auth.js";
import {
  createSellerCatalog,
  getSellerOrders,
} from "../controllers/sellerController.js";

const router = express.Router();
router.route("/create-catalog").post(auth, createSellerCatalog);
router.route("/orders").get(auth, getSellerOrders);

export default router;
