const router = require("express").Router();

router.use("/", require("./livingPlaces.routes"));
router.use("/auth", require("./auth.routes"));

module.exports = router;
