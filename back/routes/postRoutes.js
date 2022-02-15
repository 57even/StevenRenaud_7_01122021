const express = require("express");
const postControllers = require("../controllers/postControllers");
const auth = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(auth, postControllers.createNewPost);

router.route("/posts/:id").get(postControllers.getPostById);

router
  .route("/posts/:id/comments")
  .get(postControllers.getAllComments)
  .post(auth, postControllers.createNewComment);

module.exports = router;
