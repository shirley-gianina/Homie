const router = require("express").Router();

const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");

router.get("/getAllLivingPlaces", (req, res) => {
  LivingPlace.find()
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/getOneLivingPlace/:_id", (req, res) => {
  const { _id } = req.params;

  LivingPlace.findById(_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/createLivingPlace", (req, res) => {
  const { category, condition, description } = req.body;

  LivingPlace.create({
    category: category,
    condition: condition,
    description: description,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.put("/livingPlaces/:_id/edit", (req, res) => {
  const { _id } = req.params;
  const { category, condition, description } = req.body;

  LivingPlace.findOneAndUpdate({
    category: category,
    condition: condition,
    description: description,
  })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/livingPlaces/:_id/message", (req, res) => {
  const { _id } = req.params;
  const { message, owner } = req.body;

  Message.create({ owner, livingPlace, message })
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.delete("/livingPlaces/:_id/delete", (req, res) => {
  const { _id } = req.params;
  LivingPlace.findByIdAndDelete(_id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
