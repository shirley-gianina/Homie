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

    title: {
      type: String,
      required: [true, "Indica un título para este anuncio"],
    },
    type: {
      type: String,
      enum: ["Venta", "Alquiler"],
    },
    imageUrl: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "ADVERTISER",
    },
    location: {
      type: String,
      required: [true, "Indica una dirección."],
      trim: true,
    },
    decription: {
      type: String,
      required: [true, "Indica una descripción."],
    },
    features: {
      squareMeters: {
        type: String,
        required: true,
      },
      numberOfRooms: {
        type: String,
        required: true,
      },
      numberOfBathrooms: {
        type: String,
        required: true,
      },
      parkingSpace: {
        type: String,
      },
      condition: {
        type: String,
        enum: ["Nuevo", "Segunda mano"],
      },
      heating: {
        type: String,
        enum: [
          "Calefacción de gas natural",
          "Calefacción eléctrica",
          "Calefacción de gas propano",
          "Calefacción de gas butano",
          "Calefacción de gasoil",
          "Otro",
        ],
      },
      reducedMobility: {
        type: String,
      },
    },
  },

  {
    timestamps: true,
  }
);
module.exports = model("User", userSchema);
