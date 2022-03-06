const router = require("express").Router();

router.use("/", require("./livingPlaces.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/profile", require("./profile.routes"));
router.use("/upload", require("./upload.routes"));

module.exports = router;
