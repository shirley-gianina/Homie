const router = require("express").Router();

router.use("/", require("./livingPlaces.routes"));
router.use("/auth", require("./auth.routes"));
router.use("/upload", require("./upload.routes"));
// router.use("/user", require("./user.routes"))

module.exports = router;
