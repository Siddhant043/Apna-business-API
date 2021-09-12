import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A user must have a name"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "A user must have a password"],
  },
  id: {
    type: String,
  },
  category: {
    type: String,
    enum: ["seller", "buyer"],
    required: [true, "A user should either be a buyer or seller"],
  },
  catalog: [
    {
      productName: {
        type: String,
      },
      productPrice: {
        type: Number,
      },
    },
  ],
  orders: [],
});

userSchema.pre("save", async function (next) {
  //Only run this function when the password is modified
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 7);
});

userSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword);
};

export default mongoose.model("User", userSchema);
