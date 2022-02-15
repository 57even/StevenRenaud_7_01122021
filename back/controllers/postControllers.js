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
