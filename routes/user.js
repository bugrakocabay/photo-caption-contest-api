const express = require("express");
const router = express.Router();
const user = require("../controllers/user");

router.route("/register").post(user.register);
router.route("/login").post(user.login);

module.exports = router;
