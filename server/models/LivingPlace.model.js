const { Schema, model } = require("mongoose");

const LivingPlaceSchema = new Schema(
  {
    title: {
      type: String,
      // required: [true, “Image is mandatory”],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    category: {
      type: String,
      enum: ["flat", "apartment", "penthouse", "duplex", "house"],
    },
    images: {
      type: [String],
      // required: [true, “Image is mandatory”],
    },
    price: {
      type: Number,
      // required: [true, "Image is mandatory"],
    },
    location: {
      address: {
        type: String,
        // required: [true, “La ciudad es requerida”],
        trim: true,
      },
      city: {
        type: String,
        // required: [true, “La ciudad es requerida”],
        trim: true,
      },
      province: {
        type: String,
        // required: [true, “Province is required”],
        trim: true,
      },
      zipcode: {
        type: String,
        // required: [true, “Zipcode is required”],
        trim: true,
      },
      country: {
        type: String,
        // required: [true, “Country”],
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
        // required: true,
      },
      bedrooms: {
        type: Number,
        // required: true,
      },
      bathrooms: {
        type: Number,
        // required: true,
      },
      amenities: {
        type: [
          {
            type: String,
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
        ],
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("LivingPlace", LivingPlaceSchema);
