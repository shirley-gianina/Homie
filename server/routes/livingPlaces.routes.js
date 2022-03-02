const router = require("express").Router();

const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");

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

router.post("/living-places", (req, res) => {
  const { title, owner, address, price, category, condition, description, features } = req.body;

  LivingPlace.create({
    title,
    owner,
    address,
    price,
    category,
    condition,
    description,
    features
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/living-places/:id", (req, res) => {
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


  LivingPlace.findOneAndUpdate(id, {
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

router.post("/living-places/:id/message", (req, res) => {
  const { id } = req.params;
  const { message, owner } = req.body;

  LivingPlace.findById(id).then((livingPlace) => {
    return Message.create({ owner, livingPlace, message })
      .then((response) => res.json(response))
      .catch((err) => res.status(500).json(err));
  });
});

router.delete("/living-places/:id", (req, res) => {
  const { id } = req.params;
  LivingPlace.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
