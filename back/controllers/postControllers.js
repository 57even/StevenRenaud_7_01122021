const {
  default: strictTransportSecurity,
} = require("helmet/dist/middlewares/strict-transport-security");
const Post = require("../models/Post");
const Comment = require("../models/Comment");
const Like = require("../models/Like");
const db = require("../config/db");

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

    let checkTable = await db.execute(
      `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'groupomania') AND (table_name = 'comments${postId}') LIMIT 1`
    );
    let tableExists = Object.values(checkTable[0][0])[0];

    if (tableExists == 0) {
      await Comment.createTable(postId);
    }

    let comment = new Comment(postId, author, text);

    comment = await comment.save();

    res.status(201).json({ message: "Comment created successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.createNewLike = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { userId, likeValue } = req.body;

    let checkTable = await db.execute(
      `SELECT count(*) FROM information_schema.TABLES WHERE (TABLE_SCHEMA = 'groupomania') AND (table_name = 'like${postId}') LIMIT 1`
    );
    let tableExists = Object.values(checkTable[0][0])[0];

    if (tableExists == 0) {
      await Like.createTable(postId);
    }

    let checkLike = await db.execute(
      `SELECT * FROM like${postId} WHERE userId = ${userId}`
    );
    let checkValue;
    if (checkLike[0].length > 0) {
      checkValue = checkLike[0][0].likeValue;
    }

    switch (likeValue) {
      case 1:
        if (checkValue == -1) {
          Like.modifyById(postId, userId, likeValue);
          Post.modifyLikeCount(postId, 1, -1);
        } else if (checkValue != 1) {
          let like = new Like(postId, userId, likeValue);

          like = await like.save();

          Post.modifyLikeCount(postId, 1, 0);
        } else if (checkValue == 1) {
          Like.deleteById(postId, userId);
          Post.modifyLikeCount(postId, -1, 0);
        }
        break;

      case 0:
        if (checkLike[0].length > 0) {
          Like.deleteById(postId, userId);
        }
        break;

      case -1:
        if (checkValue == 1) {
          Like.modifyById(postId, userId, likeValue);
          Post.modifyLikeCount(postId, -1, 1);
        } else if (checkValue != -1) {
          let like = new Like(postId, userId, likeValue);

          like = await like.save();

          Post.modifyLikeCount(postId, 0, 1);
        } else if (checkValue == -1) {
          Like.deleteById(postId, userId);
          Post.modifyLikeCount(postId, 0, -1);
        }
        break;
    }

    res.status(201).json({ message: "Like created successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getPostById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    if (!Number(postId)) {
      let [posts, _] = await Post.findById(postId);

      res.status(200).json({ posts });
    } else {
      let [post, _] = await Post.findById(postId);

      res.status(200).json({ post: post[0] });
    }
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.getLikeById = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let userId = req.params.userId;

    let checkLike = await db.execute(
      `SELECT * FROM like${postId} WHERE userId = ${userId}`
    );
    if (checkLike[0].length > 0) {
      let [like, _] = await Like.findById(postId, userId);
      res.status(200).json({ like: like[0] });
    }

    res.status(200).json({ message: "No like found" });
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
    let postId = req.params.id;
    let { commentId, text } = req.body;
    await Comment.modifyById(postId, commentId, text);
    res.status(200).json({ message: "Comment modified successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.modifyLike = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { userId, like } = req.body;
    await Like.modifyById(postId, userId, like);
    res.status(200).json({ message: "Like modified successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deletePost = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { commentCount } = req.body;
    await Post.deleteById(postId, commentCount);

    res.status(200).json({ message: "Post deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteComment = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { commentId } = req.body;
    await Comment.deleteById(postId, commentId);
    res.status(200).json({ message: "Comment deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

exports.deleteLike = async (req, res, next) => {
  try {
    let postId = req.params.id;
    let { userId } = req.body;
    await Like.deleteById(postId, userId);
    res.status(200).json({ message: "Like deleted successfully." });
  } catch (error) {
    console.log(error);
    next(error);
  }
};
