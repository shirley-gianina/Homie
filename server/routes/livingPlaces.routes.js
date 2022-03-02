const router = require("express").Router();
const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/living-places", (req, res) => {
  LivingPlace.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/living-places/:id", (req, res) => {
  const { id } = req.params;

  LivingPlace.findById(_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/living-places", isAuthenticated, (req, res) => {
  const {
    title,
    owner,
    address,
    price,
    category,
    condition,
    description,
    features,
  } = req.body;

  LivingPlace.create({
    title,
    owner,
    address,
    price,
    category,
    condition,
    description,
    features,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/living-places/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  const {
    title,
    owner,
    address,
    price,
    category,
    condition,
    description,
    features,
  } = req.body;

  LivingPlace.findOneAndUpdate({
    title,
    owner,
    address,
    price,
    category,
    condition,
    description,
    features,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/livingPlaces/:id/message", isAuthenticated, (req, res) => {
  const { id } = req.params;
  const { message, owner } = req.body;

  Message.create({ owner, livingPlace, message })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.delete("/livingPlaces/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  LivingPlace.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
