import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true, trim: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

userSchema.static.encryptPassword = (password) => {
  const salt = bcrypt.genSalt(10);
  const hash = bcrypt.hash(password, salt);
  return hash;
};

export default model("User", userSchema);
