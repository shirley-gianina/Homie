const { Schema, model } = require("mongoose");
const MessageSchema = new Schema(
  {
    livingPlace: {
      type: Schema.Types.ObjectId,
      ref: "LivingPlace",
    },
    message: {
      type: String,
      default: "Hello, I would like to know more about this living place.",
    },
    phone: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },

  {
    timestamps: true,
  }
);
module.exports = model("Message", MessageSchema);
