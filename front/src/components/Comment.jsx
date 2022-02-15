import React from "react";
import profilePic from "../icons/profile_pic.png";
import TimeAgo from "react-timeago";

export default function Comment({ comment, formatter }) {
  return (
    <div className="w-full flex flex-col mb-2">
      <div className="flex gap-1.5 pl-1.5 pt-1.5 text-sm">
        <a href="#" className="rounded-full">
          <img
            src={profilePic}
            alt="Avatar"
            className="h-7 w-7 object-cover rounded-full"
          />
        </a>
        <span>
          <a href="#" className="font-bold">
            {comment.author}
          </a>
          , <TimeAgo date={comment.date} formatter={formatter} />
        </span>
      </div>
      <h1 className="ml-10 -mt-1.5">{comment.text}</h1>
    </div>
  );
}
