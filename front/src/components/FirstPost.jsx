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
  let authId;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    authId = JSON.parse(localStorage.getItem("token")).userId;
  }
  const [commentsCount, setCommentsCount] = useState(0);
  const [authorName, setAuthorName] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${post.id}/comments`)
      .then((res) => {
        setCommentsCount(res.data.comments.length);
      })
      .catch((err) => {
        console.log(err);
      });

    axios
      .get(`http://localhost:3000/auth/${post.author}`)
      .then((res) => {
        setAuthorName(`${res.data.user.firstName} ${res.data.user.lastName}`);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [post.id, post.author]);

  const handleModify = () => {
    setIsEdit(true);
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${post.id}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    navigate("/");
  };

  let editPost;
  if (Number(authId) === Number(post.author)) {
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
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbUpIcon className="h-6" />
              <span className="">23</span>
            </button>
            <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
              <ThumbDownIcon className="h-6" />
              <span className="">5</span>
            </button>
            <div className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700">
              <AnnotationIcon className="h-6" />
              <span className="">{commentsCount}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
