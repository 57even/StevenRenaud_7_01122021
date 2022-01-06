const {
  default: strictTransportSecurity,
} = require("helmet/dist/middlewares/strict-transport-security");
const Post = require("../models/Post");

exports.getAllPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.findAll();

    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewPost = async (req, res, next) => {
  try {
    let { author, title, body } = req.body;
    let post = new Post(author, title, body);

    post = await post.save();

    res.status(201).json({ message: "Post created successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postID = req.params.id;
    let [post, _] = await Post.findById(postID);

    res.status(200).json({ post: post[0] });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
