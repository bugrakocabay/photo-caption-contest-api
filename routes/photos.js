const express = require("express");
const router = express.Router();
const photos = require("../controllers/photos");

router.route("/").get(photos.getPhotos).post(photos.createPhoto);
router
  .route("/:id")
  .get(photos.getSinglePhoto)
  .delete(photos.deletePhoto)
  .put(photos.updatePhoto);

module.exports = router;
