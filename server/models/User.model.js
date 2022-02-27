const { Schema, model } = require("mongoose");
const userSchema = new Schema(
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
    role: {
      type: String,
      enum: ["USER", "ADVERTISER", "ADMIN"],
      default: "USER",
    },

    profile: {
      name: {
        type: String,
        required: true,
        lastName: {
          type: String,
          required: true,
          image: {
            type: String,
            default: "https://i.stack.imgur.com/l60Hf.png",
          },
        },
      },
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
