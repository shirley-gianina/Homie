const { Schema, model } = require("mongoose");
const MessageSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    livingPlace: {
      type: Schema.Types.ObjectId,
      ref: "LivingPlace",
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = model("Message", MessageSchema);
