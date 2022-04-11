import React, { useState, useEffect } from "react";
import "./PostCard.css";
import {
  ThumbUpIcon,
  ThumbDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import axios from "axios";
import profilePic from "../icons/profile_pic.png";

export default function PostCard({ post, formatter, isAuth }) {
  let token;
  let userId;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    userId = JSON.parse(localStorage.getItem("token")).userId;
  }

  const [authorName, setAuthorName] = useState();
  const [authorPic, setAuthorPic] = useState();
  let [isLike, setIsLike] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/users/${post.author}`
        );

        if (!res.data.user) {
          setAuthorName("Deleted User");
          setAuthorPic(profilePic);
        } else {
          setAuthorName(`${res.data.user.firstName} ${res.data.user.lastName}`);
          setAuthorPic(res.data.user.avatar);
        }

        if (userId && post.likeCount + post.dislikeCount > 0) {
          const res1 = await axios.get(
            `http://localhost:3000/likes/${post.id}/${userId}`
          );
          if (Object.keys(res1.data)[0] === "like") {
            setIsLike(res1.data.like.likeValue);
          }
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [post.id, post.author, userId, post.likeCount, post.dislikeCount]);

  const [likeCount, setLikeCount] = useState(post.likeCount);
  let likeColor = "";
  if (isLike === 1) {
    likeColor = "text-blue-500";
  }
  const [dislikeCount, setDislikeCount] = useState(post.dislikeCount);
  let dislikeColor = "";
  if (isLike === -1) {
    dislikeColor = "text-red-500";
  }

  const handleLikeCount = (value) => {
    setLikeCount(likeCount + value);
    likeColor = "text-blue-500";
  };
  const handleDislikeCount = (value) => {
    setDislikeCount(dislikeCount + value);
    dislikeColor = "text-red-500";
  };

  const handleLike = async () => {
    if (isAuth == 1) {
      let postId = post.id;
      let likeValue = 1;
      await axios.post(
        `http://localhost:3000/likes/${post.id}`,
        {
          postId,
          userId,
          likeValue,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (isLike !== 1) {
        handleLikeCount(1);
        if (isLike === -1) handleDislikeCount(-1);
        likeColor = "text-blue-500";
        dislikeColor = "";
        setIsLike(1);
      } else if (isLike === 1) {
        handleLikeCount(-1);
        likeColor = "";
        setIsLike(0);
      }
    }
  };

  const handleDislike = async () => {
    if (isAuth == 1) {
      let postId = post.id;
      let likeValue = -1;
      await axios.post(
        `http://localhost:3000/likes/${post.id}`,
        {
          postId,
          userId,
          likeValue,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      if (isLike !== -1) {
        handleDislikeCount(1);
        if (isLike === 1) handleLikeCount(-1);
        dislikeColor = "text-red-500";
        likeColor = "";
        setIsLike(-1);
      } else if (isLike === -1) {
        handleDislikeCount(-1);
        dislikeColor = "";
        setIsLike(0);
      }
    }
  };

  let postContent;
  if (post.image && post.image !== "undefined") {
    postContent = (
      <Link
        to={`/posts/${post.id}`}
        key={post.id}
        className="relative flex flex-col flex-wrap p-2.5 pt-0 overflow-hidden w-full"
      >
        <h3 className="font-bold text-lg">{post.title}</h3>
        <div className="flex justify-center">
          <img src={post.image} alt="ImagePost" className="max-h-675" />
        </div>
      </Link>
    );
  } else if (post.text && post.text !== "undefined") {
    postContent = (
      <Link
        to={`/posts/${post.id}`}
        key={post.id}
        className="relative flex flex-col-reverse flex-wrap p-2.5 pt-0 max-h-52 overflow-hidden w-full"
      >
        <div className="max-h-full overflow-hidden">
          <h3 className="font-bold text-lg">{post.title}</h3>
          <p>{post.text}</p>
        </div>
        <div className="background"></div>
      </Link>
    );
  } else {
    postContent = (
      <Link
        to={`/posts/${post.id}`}
        key={post.id}
        className="relative flex flex-col-reverse flex-wrap p-2.5 pt-0 max-h-52 overflow-hidden w-full"
      >
        <div className="max-h-full overflow-hidden">
          <h3 className="font-bold text-lg">{post.title}</h3>
        </div>
        <div className="background"></div>
      </Link>
    );
  }

  return (
    <div className="flex flex-col items-start rounded-md bg-white max-w-3xl w-full border">
      <div className="flex gap-1.5 items-center pl-2.5 pt-1.5 text-sm">
        <Link
          to={`/profile/${post.author}`}
          key={post.author}
          className="rounded-full"
        >
          <img
            src={authorPic}
            alt="Avatar"
            className="h-8 w-8 object-cover rounded-full"
          />
        </Link>
        <span>
          <Link
            to={`/profile/${post.author}`}
            key={post.author}
            className="font-bold"
          >
            {authorName}
          </Link>
          , <TimeAgo date={post.date} formatter={formatter} />
        </span>
      </div>
      {postContent}
      <div className="flex m-2.5 mt-1 gap-2">
        <button
          className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
          onClick={handleLike}
        >
          <ThumbUpIcon className={`h-6 ${likeColor}`} />
          <span className="">{likeCount}</span>
        </button>
        <button
          className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
          onClick={handleDislike}
        >
          <ThumbDownIcon className={`h-6 ${dislikeColor}`} />
          <span className="">{dislikeCount}</span>
        </button>
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
        >
          <AnnotationIcon className="h-6" />
          <span className="">{post.commentCount}</span>
        </Link>
      </div>
    </div>
  );
}
