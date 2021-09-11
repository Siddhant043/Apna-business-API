import mongoose from "mongoose";
import Seller from "./models/sellerModel.js";
import dotenv from "dotenv";
dotenv.config({ path: "./config.env" });

import app from "./app.js";
const DB = process.env.DATABASE_URL.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

// const testSeller = new Seller({
//   name: "Seller",
//   password: 12345678,
//   catalog: {
//     productName: "Product1",
//     productPrice: 222,
//   },
// });

// testSeller
//   .save()
//   .then((doc) => {
//     console.log(doc);
//   })
//   .catch((err) => {
//     console.log("Error", err);
//   });

const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB connection successful!");
    app.listen(PORT, () => {
      console.log(`App running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err.message));
