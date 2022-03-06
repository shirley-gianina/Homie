const router = require("express").Router();

const uploader = require("./../config/cloudinary.config");

router.post("/image", uploader.array("images"), (req, res) => {
  if (!req.files.length) {
    res.status(500).json({ errorMessage: "Error caragndo el archivo" });
    return;
  }

  const cloudinaryUrls = req.files.map((file) => {
    return file.path;
  });
  res.json({ cloudinaryUrls: cloudinaryUrls });
});

module.exports = router;
