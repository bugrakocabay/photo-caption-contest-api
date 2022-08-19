const express = require("express");
const router = express.Router();
const captions = require("../controllers/captions");

router.route("/").post(captions.createCaption);
router
  .route("/:id")
  .get(captions.getCaption)
  .delete(captions.deleteCaption)
  .put(captions.updateCaption);

module.exports = router;
