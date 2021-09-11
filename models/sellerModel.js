import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A Seller must have a name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A seller must have a password"],
  },
  id: {
    type: String,
  },
  catalog: {
    productName: {
      type: String,
    },
    productPrice: {
      type: Number,
    },
  },
  orders: {
    buyerName: {
      type: String,
    },
    productName: {
      type: String,
    },
  },
});

export default mongoose.model("Seller", sellerSchema);
