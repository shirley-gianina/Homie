const router = require("express").Router();
const LivingPlace = require("./../models/LivingPlace.model");
const Message = require("./../models/Message.model");
const { isAuthenticated } = require("../middlewares/jwt.middleware");

router.get("/living-places", (req, res) => {
  const { query } = req;
  const filter = {};
  let limit = 100;

  if (query.city) {
    filter["location.city"] = query.city;
  }

  if (query.country) {
    filter["location.country"] = query.country;
  }

  if (query.category) {
    filter["category"] = query.category;
  }

  if (query.condition) {
    filter["condition"] = query.condition;
  }

  if (query.limit) {
    limit = query.limit;
  }

  console.log(filter);

  LivingPlace.find(filter)
    .populate("owner")
    .limit(limit)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.get("/living-places/:id", (req, res) => {
  const { id } = req.params;

  LivingPlace.findById(id)
    .populate("owner")
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/living-places", isAuthenticated, (req, res) => {
  const { payload } = req;
  const {
    title,
    description,
    price,
    category,
    condition,
    features,
    location,
    images,
  } = req.body;
  const userId = payload._id;

  LivingPlace.create({
    owner: userId,
    title,
    description,
    price,
    category,
    condition,
    features,
    location,
    images,
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

  LivingPlace.findByIdAndUpdate(id, {
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
  const { message, name, phone, email } = req.body;

  LivingPlace.findById(id)
    .then(() => {
      return Message.create({ livingPlace: id, message, name, phone, email })
        .then((response) => res.json(response))
        .catch((err) => res.status(500).json(err));
    })
    .catch((err) => res.status(500).json(err));
});

router.delete("/living-places/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  LivingPlace.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
