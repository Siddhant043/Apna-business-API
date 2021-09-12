import util from "util";
import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const signToken = (id) => {
  return jwt.sign({ id }, "business", {
    expiresIn: "90d",
  });
};

export const registerUser = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      password: req.body.password,
      category: req.body.category,
    });

    const token = signToken(newUser._id);
    res.status(201).json({
      status: "success",
      token,
      data: {
        user: newUser,
      },
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};

export const loginUser = async (req, res, next) => {
  try {
    const { name, password } = req.body;
    //to check if the fields exist
    if (!name || !password) {
      res.status(400).json({
        status: "failed",
        error: "Please provide name/password.",
      });
    }
    //to check if the user exists and password is correct
    const user = await User.findOne({ name }).select("password");
    if (!user || !(await user.correctPassword(password, user.password))) {
      res.status(400).json({
        status: "failed",
        error: "Incorrect name or password",
      });
    }
    const token = signToken(user._id);
    res.status(200).json({
      status: "success",
      token,
    });
  } catch (error) {
    res.status(401).json({
      status: "failed",
      error: error.message,
    });
  }
};
