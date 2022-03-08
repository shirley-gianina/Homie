const router = require("express").Router();

const uploader = require("./../config/cloudinary.config");

router.post("/image", uploader.array("images"), (req, res) => {
  if (!req.files.length) {
<<<<<<< HEAD
    return res.status(500).json({ errorMessage: "Error while uploading" });
=======
    res.status(500).json({ errorMessage: "Error while uploading" });
    return;
>>>>>>> 2a698a6e396f2d81f926268711867c90954db81a
  }

  const cloudinaryUrls = req.files.map((file) => file.path)
  res.json({ cloudinaryUrls: cloudinaryUrls })
});

module.exports = router;
