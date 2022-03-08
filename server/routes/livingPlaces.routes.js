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
  const userId = req.payload._id
  const {
    title,
    category,
    images,
    price,
    features,
    amenities,
    location,
    description,
    condition,
  } = req.body;

  LivingPlace.create({
    title,
    owner: userId,
    category,
    images,
    price,
    location,
    amenities,
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
  const userId = req.payload._id;

  const {
    title,
    description,
    category,
    images,
    price,
    location,
    condition,
    features,
    amenities,
  } = req.body;

  console.log(req.body);

  LivingPlace.findOneAndUpdate(
    { _id: id, owner: userId },
    {
      title,
      category,
      images,
      price,
      location,
      description,
      condition,
      features,
      amenities,
    }
  )
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.post("/living-places/:id/message", (req, res) => {
  const { id } = req.params;
  const { message, name, phone, email } = req.body;

  LivingPlace.findById(id)
    .then(() => Message.create({ livingPlace: id, message, name, phone, email }))
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

router.delete("/living-places/:id", isAuthenticated, (req, res) => {
  const { id } = req.params;
  LivingPlace.findByIdAndDelete(id)
    .then((response) => res.json(response))
    .catch((err) => res.status(500).json(err));
});

module.exports = router;
