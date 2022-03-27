const express = require("express");
const userControllers = require("../controllers/userControllers");
const auth = require("../middleware/auth");
const multer = require("../middleware/multer-config1");
const router = express.Router();

router.route("/auth").post(userControllers.authCheck);
router.route("/signup").post(userControllers.signup);
router.route("/login").post(userControllers.login);

router
  .route("/:id")
  .get(userControllers.getUser)
  .put(auth, multer, userControllers.modifyUser)
  .delete(auth, userControllers.deleteUser);

module.exports = router;
