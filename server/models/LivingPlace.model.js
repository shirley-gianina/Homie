const { Schema, model } = require("mongoose");

const LivingPlaceSchema = new Schema(
  {
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      enum: ["flat", "apartment", "penthouse", "duplex", "house"],
    },
    imageUrl: {
      type: String,
      required: [true, "Image is mandatory"],
    },
    address: {
      city: {
        type: String,
        required: [true, "La ciudad es requerida"],
        trim: true,
      },
      province: {
        type: String,
        required: [true, "Province is required"],
        trim: true,
      },
      zipcode: {
        type: String,
        required: [true, "Zipcode is required"],
        trim: true,
      },
      country: {
        type: String,
        required: [true, "El codigo postal es requerido"],
        trim: true,
      },
    },
    description: {
      type: String,
    },
    condition: {
      type: String,
      enum: ["New", "Second hand"],
    },
    features: {
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
          type: [String],
          enum: [
            "elevator",
            "heating",
            "reduced mobility",
            "parking",
            "terrace",
            "garden",
            "swimming pool",
            "air conditioning",
            "pets allowed",
          ],
        },
      },
    },

  {
    timestamps: true,
  }
);
module.exports = model("LivingPlace", LivingPlaceSchema);
