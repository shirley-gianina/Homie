const { Schema, model } = require("mongoose");

const LivingPlaceSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    type: {
      type: String,
      enum: ["Sale", "Rent"],
    },// lo podriamos simplificar solo por alquiler
    category: {
      type: String,
      enum:["flat", "apartment", "penthouse", "duplex", "house"]
    },
    imageUrl: {
      type: String,
      required: [true, "La imagen es obligatoria"],
    },
    address: {
      type: String,
      required: [true, "La direccion es requerida"],
      trim: true
    },
    city: {
      type: String,
      required: [true, "La ciudad es requerida"],
      trim: true
    },
    province: {
      type: String,
      required: [true, "La provincia es requerida"],
      trim: true
    },
    zipcode: {
      type: String,
      required: [true, "El codigo postal es requerido"],
      trim: true

    },
    country: {
      type: String,
      required: [true, "El codigo postal es requerido"],
      trim: true
    },
    decription: {
      type: String,
      required: [true, "Indica una descripción."],
    },
    condition: {
      type: String,
      enum: ["New", "Second hand"],
    },
    m2: {
      type: Number,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    amenities: {
      name: [String],
      enum: ["lift", "heating", "reduced mobility", "parking", "terrace", "garden", "swimming pool", "air conditioning", "pets allowed"]
    }
  },
  {
    timestamps: true,
  }
);
module.exports = model("LivingPlace", LivingPlaceSchema);

