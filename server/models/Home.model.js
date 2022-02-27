const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
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
      ref: "User",
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
