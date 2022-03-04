const router = require("express").Router();
const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");
const User = require("./../models/User.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const fileUploader = require("../config/cloudinary.config");

router.get("/living-places", (req, res) => {
  LivingPlace.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/living-places/:id", (req, res) => {
  const { id } = req.params;

  LivingPlace.findById(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/living-places", isAuthenticated, (req, res) => {
  const { payload } = req;
  const {
    title,
    category,
    images,
    price,
    m2,
    bedrooms,
    bathrooms,
    amenities,
    address,
    city,
    province,
    zipcode,
    country,
    description,
    condition,
  } = req.body;

  console.log(req.body, req.payload, "a ver que sale de esto");

  const features = {
    m2,
    bedrooms,
    bathrooms,
    amenities: [amenities],
  };

  const location = {
    address,
    city,
    province,
    zipcode,
    country,
  };

  const owner = payload._id;

  LivingPlace.create({
    title,
    owner: payload._id,
    category,
    images,
    price,
    location,
    description,
    condition,
    features,
  })
    .then((response) => {
      console.log(response, "creado place");
      res.json(response);
    })
    .catch((err) => res.status(500).json(err));
});

router.put("/living-places/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  const {
    title,
    owner,
    category,
    images,
    price,
    location,
    description,
    condition,
    features,
  } = req.body;

  LivingPlace.findOneAndUpdate({
    title,
    owner,
    category,
    images,
    price,
    location,
    description,
    condition,
    features,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/livingPlaces/:id/message", isAuthenticated, (req, res) => {
  const { id } = req.params;
  const { message, owner } = req.body;

  LivingPlace.findById(id).then((livingPlace) => {
    return Message.create({ owner, livingPlace, message })
      .then((response) => res.json(response))
      .catch((err) => res.status(500).json(err));
  });
});

router.delete("/livingPlaces/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  LivingPlace.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
