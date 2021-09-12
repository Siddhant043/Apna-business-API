import express from "express";
import morgan from "morgan";
import buyerRouter from "./routes/buyerRoutes.js";
import sellerRouter from "./routes/sellerRoutes.js";
import authRouter from "./routes/authRoutes.js";
const app = express();

//middlewares

app.use(morgan("dev"));

app.use(express.json()); //Help in json post req

app.use((req, res, next) => {
  console.log("Middleware running");
  next();
});

//Routes
//auth
app.use("/api/auth", authRouter);
//sellers
app.use("/api/seller", sellerRouter);

//buyers
app.use("/api/buyer", buyerRouter);

export default app;
