const { Schema, model } = require("mongoose");
const UserSchema = new Schema(
  {
    username: {
      minlength: [3, "El nombre de usuario debe tener mínimo 3 caracteres"],
      type: String,
      trim: true,
      required: [true, "Indica el nombre de usuario"],
    },
    email: {
      type: String,
      required: [true, "Indica el email."],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
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

