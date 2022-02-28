const { Schema, model } = require("mongoose");
const MessageSchema = new Schema(
  {
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    livingPlace: {
        type: Schema.Types.ObjectId,
        ref: 'LivingPlace'
    },
    senderName: {
      type: String,
      lowercase: true,
      trim: true,
    },
    senderEmail: {
      type: String,
      required: [true, "Indica el email."],
      unique: true,
      lowercase: true,
      trim: true,
    },
     senderPhone: {
      type: String,
      required: true,
    },
    message: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);
module.exports = model("Message", MessageSchema);



