const express = require("express");
const userControllers = require("../controllers/userControllers");
const router = express.Router();

router.route("/").post(userControllers.authCheck);
router.route("/signup").post(userControllers.signup);
router.route("/login").post(userControllers.login);

router.route("/:id").get(userControllers.getUser);
// .put(userControllers.modifyUser);

module.exports = router;
