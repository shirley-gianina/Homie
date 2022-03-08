const router = require("express").Router();

const uploader = require("./../config/cloudinary.config");

router.post("/image", uploader.array("images"), (req, res) => {
  if (!req.files.length) {
    return res.status(500).json({ errorMessage: "Error while uploading" });
  }

  const cloudinaryUrls = req.files.map((file) => file.path)
  res.json({ cloudinaryUrls: cloudinaryUrls })
});

module.exports = router;
