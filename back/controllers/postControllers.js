const {
  default: strictTransportSecurity,
} = require("helmet/dist/middlewares/strict-transport-security");
const Post = require("../models/Post");
const Comment = require("../models/Comment");

exports.getAllPosts = async (req, res, next) => {
  try {
    let [posts, _] = await Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getAllComments = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [comments, _] = await Comment.findAll(postId);

    res.status(200).json({ comments });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { author, title, text } = req.body;
    let post = new Post(author, title, text);

    post = await post.save();

    res.status(201).json({ message: "Post created successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewComment = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { author, text } = req.body;
    let comment = new Comment(postId, author, text);

    comment = await comment.save();

    res.status(201).json({ message: "Comment created successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let [post, _] = await Post.findById(postId);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.modifyPost = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { title, text } = req.body;
    await Post.modifyById(postId, title, text);
    res.status(200).json({ message: "Post modified successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.modifyComment = async (req, res, next) => {
  try {
    let commentId = req.params.id;
    let { text } = req.body;
    await Comment.modifyById(commentId, text);
    res.status(200).json({ message: "Comment modified successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    let postId = req.params.id;
    await Post.deleteById(postId);
    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    let commentId = req.params.id;
    await Comment.deleteById(commentId);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
