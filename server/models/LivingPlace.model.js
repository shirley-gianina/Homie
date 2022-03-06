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
    },
    amenities: {
      elevator: {
        type: Boolean,
        default: false,
      },
      heating: {
        type: Boolean,
        default: false,
      },
      "reduced mobility": {
        type: Boolean,
        default: false,
      },
      parking: {
        type: Boolean,
        default: false,
      },
      terrace: {
        type: Boolean,
        default: false,
      },
      garden: {
        type: Boolean,
        default: false,
      },
      "swimming pool": {
        type: Boolean,
        default: false,
      },
      "air conditioning": {
        type: Boolean,
        default: false,
      },
      "pets allowed": {
        type: Boolean,
        default: false,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("LivingPlace", LivingPlaceSchema);
