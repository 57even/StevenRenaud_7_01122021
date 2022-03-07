import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  ThumbUpIcon,
  ThumbDownIcon,
  AnnotationIcon,
  PencilAltIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import profilePic from "../icons/profile_pic.png";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export default function FirstPost({ post, formatter, setIsEdit }) {
  const navigate = useNavigate();
  let token;
  let userId;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    userId = JSON.parse(localStorage.getItem("token")).userId;
  }

  const [authorName, setAuthorName] = useState();
  let [isLike, setIsLike] = useState(0);
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `http://localhost:3000/users/${post.author}`
        );
        setAuthorName(`${res.data.user.firstName} ${res.data.user.lastName}`);

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
  }, [post.id, post.author, userId, isLike, post.likeCount, post.dislikeCount]);

  const handleModify = () => {
    setIsEdit(true);
  };

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
  };

  const handleDislike = async () => {
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
  };

  const handleDelete = async () => {
    let commentCount;
    if (post.commentCount > 0) {
      commentCount = true;
    } else {
      commentCount = false;
    }
    await axios.delete(`http://localhost:3000/posts/${post.id}`, {
      data: { commentCount },
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate("/");
  };

  let editPost;
  if (Number(userId) === Number(post.author)) {
    editPost = (
      <div className="flex">
        <PencilAltIcon
          className="h-6 m-2.5 mr-0.5 text-gray-700 cursor-pointer"
          onClick={handleModify}
        />
        <XCircleIcon
          className="h-6 m-2.5 ml-0.5 text-gray-700 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    );
  } else {
    editPost = "";
  }

  return (
    <main className="flex flex-col justify-center items-center">
      <section className="w-full flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-start rounded-md bg-white w-45rem border">
          <div className="w-full flex justify-between">
            <div className="flex gap-1.5 items-center pl-2.5 pt-1.5 text-sm">
              <Link
                to={`/profile/${post.author}`}
                key={post.author}
                className="rounded-full"
              >
                <img
                  src={profilePic}
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
            {editPost}
          </div>
          <div className="relative flex flex-col-reverse flex-wrap p-2.5 pt-0 overflow-hidden">
            <div className="max-h-full overflow-hidden">
              <h1 className="font-bold text-lg">{post.title}</h1>
              <p>{post.text}</p>
            </div>
          </div>
          <div className="flex m-2.5 mt-1 gap-2">
            <button
              className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
              onClick={handleLike}
            >
              <ThumbUpIcon className={`h-6 ${likeColor}`} />
              <span>{likeCount}</span>
            </button>
            <button
              className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
              onClick={handleDislike}
            >
              <ThumbDownIcon className={`h-6 ${dislikeColor}`} />
              <span>{dislikeCount}</span>
            </button>
            <div className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700">
              <AnnotationIcon className="h-6" />
              <span className="">{post.commentCount}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
