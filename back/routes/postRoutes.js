const express = require("express");
const postControllers = require("../controllers/postControllers");
const auth = require("../middleware/auth");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getAllPosts)
  .post(auth, postControllers.createNewPost);

router
  .route("/posts/:id")
  .get(postControllers.getPostById)
  .put(auth, postControllers.modifyPost)
  .delete(auth, postControllers.deletePost);

router
  .route("/posts/:id/comments")
  .get(postControllers.getAllComments)
  .post(auth, postControllers.createNewComment);

router
  .route("/comments/:id")
  .put(auth, postControllers.modifyComment)
  .delete(auth, postControllers.deleteComment);

module.exports = router;
