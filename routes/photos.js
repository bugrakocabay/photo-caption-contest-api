const express = require("express");
const router = express.Router();
const photos = require("../controllers/photos");
const passport = require("passport");

router
  .route("/")
  .get(photos.getPhotos)
  .post(passport.authenticate("jwt", { session: false }), photos.createPhoto);
router
  .route("/:id")
  .get(photos.getSinglePhoto)
  .delete(photos.deletePhoto)
  .put(photos.updatePhoto);

module.exports = router;
