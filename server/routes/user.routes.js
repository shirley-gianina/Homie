const router = require("express").Router();
const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");
const User = require("./../models/User.model");

router.get("/profile/:id", (req, res) => {
  User.find(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
    console.log(id)
});


router.post("/profile", (req, res) => {
  const {
    username,
    firstName,
    lastName,
    email,
    password,
    phone
} = req.body;

  User.create({
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/profile/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  const { username, firstName, lastName, email, password, phone } = req.body;

  User.findOneAndUpdate({
    username,
    firstName,
    lastName,
    email,
    password,
    phone,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.delete("/profile/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  User.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
