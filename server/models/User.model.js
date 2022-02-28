const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, "Provide an email address."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Provide a password."],
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "https://i.stack.imgur.com/l60Hf.png",
    },
    role: {
      type: String,
      enum: ["USER", "ADMIN"],
      default: "USER",
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("User", UserSchema);
