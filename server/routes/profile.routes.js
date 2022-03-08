const router = require("express").Router();
const LivingPlace = require("../models/LivingPlace.model");
const Message = require("../models/Message.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const User = require("../models/User.model");

router.get("/", isAuthenticated, (req, res) => {
  const userId = req.payload._id;

  User.findById(userId)
    .select("firstName lastName email phone role image createdAt")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/", isAuthenticated, (req, res) => {
  const userId = req.payload._id;
  const { firstName, lastName, email, password, phone, image } = req.body;
  const data = {};

  if (firstName) {
    data.firstName = firstName;
  }
  if (lastName) {
    data.lastName = lastName;
  }
  if (email) {
    data.email = email;
  }
  if (password) {
    data.password = password;
  }
  if (phone) {
    data.phone = phone;
  }
  if (image) {
    data.image = image;
  }

  User.findByIdAndUpdate(userId, data, { new: true })
    .select("firstName lastName email phone role image createdAt")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/living-places", isAuthenticated, (req, res) => {
  const userId = req.payload._id;

  LivingPlace.find({ owner: userId })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/messages", isAuthenticated, (req, res) => {
  const userId = req.payload._id;

  LivingPlace.find({ owner: userId })
    .select("_id")
    .then((ids) => Message.find({ livingPlace: { $in: ids } }))
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
