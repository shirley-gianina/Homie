const router = require("express").Router();

router.use("/", require("./livingPlaces.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/profile", require("./profile.routes"))

module.exports = router;
