import React, { useState, useEffect } from "react";
import "./PostCard.css";
import {
  ThumbUpIcon,
  ThumbDownIcon,
  AnnotationIcon,
} from "@heroicons/react/outline";
import profilePic from "../icons/profile_pic.png";
import { Link } from "react-router-dom";
import TimeAgo from "react-timeago";
import axios from "axios";

export default function PostCard({ post, formatter }) {
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

  return (
    <div className="flex flex-col items-start rounded-md bg-white w-45rem border">
      <div className="flex gap-1.5 items-center pl-2.5 pt-1.5 text-sm">
        <a href="#" className="rounded-full">
          <img
            src={profilePic}
            alt="Avatar"
            className="h-8 w-8 object-cover rounded-full"
          />
        </a>
        <span>
          <a href="#" className="font-bold">
            {authorName}
          </a>
          , <TimeAgo date={post.date} formatter={formatter} />
        </span>
      </div>
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
      <div className="flex m-2.5 mt-1 gap-2">
        <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
          <ThumbUpIcon className="h-6" />
          <span className="">23</span>
        </button>
        <button className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer">
          <ThumbDownIcon className="h-6" />
          <span className="">5</span>
        </button>
        <Link
          to={`/posts/${post.id}`}
          key={post.id}
          className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 text-gray-700 cursor-pointer"
        >
          <AnnotationIcon className="h-6" />
          <span className="">{commentsCount}</span>
        </Link>
      </div>
    </div>
  );
}
