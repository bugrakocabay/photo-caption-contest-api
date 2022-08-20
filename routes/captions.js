const express = require("express");
const router = express.Router();
const captions = require("../controllers/captions");
const passport = require("passport");

router
  .route("/")
  .post(
    passport.authenticate("jwt", { session: false }),
    captions.createCaption
  );
router
  .route("/:id")
  .get(captions.getCaption)
  .delete(
    passport.authenticate("jwt", { session: false }),
    captions.deleteCaption
  )
  .put(
    passport.authenticate("jwt", { session: false }),
    captions.updateCaption
  );

module.exports = router;
