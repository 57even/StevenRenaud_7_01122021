import React, { useState, useEffect } from "react";
import axios from "axios";
import { PencilAltIcon, XCircleIcon } from "@heroicons/react/outline";
import TimeAgo from "react-timeago";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import profilePic from "../icons/profile_pic.png";

export default function Comment({ comment, formatter }) {
  const { postId } = useParams();
  const commentId = comment.id;
  const [isEdit, setIsEdit] = useState(false);
  const [text, setText] = useState(comment.text);
  const handleText = (e) => {
    setText(e.target.value);
  };

  let token;
  let authId;
  let isAdmin;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    authId = JSON.parse(localStorage.getItem("token")).userId;
    isAdmin = JSON.parse(localStorage.getItem("token")).isAdmin;
    if (isAdmin === 1) {
      (async () => {
        try {
          const res = await axios.get(`http://localhost:3000/users/${authId}`);
          isAdmin = res.data.user.admin;
        } catch (error) {
          console.log(error);
        }
      })();
    }
  }

  const [authorName, setAuthorName] = useState();
  const [authorPic, setAuthorPic] = useState();
  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${comment.author}`)
      .then((res) => {
        if (!res.data.user) {
          setAuthorName("Utilisateur supprimé");
          setAuthorPic(profilePic);
        } else {
          setAuthorName(`${res.data.user.firstName} ${res.data.user.lastName}`);
          setAuthorPic(res.data.user.avatar);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [comment.author]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/posts/${postId}/comments`, {
      data: { commentId },
      headers: { Authorization: `Bearer ${token}` },
    });
    window.location.reload();
  };

  const handleEdit = () => {
    setIsEdit(true);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  const handleModify = async (e) => {
    e.preventDefault();
    if (text !== "") {
      let userId = JSON.parse(localStorage.getItem("token")).userId;
      await axios.put(
        `http://localhost:3000/posts/${postId}/comments`,
        {
          commentId,
          userId,
          text,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      window.location.reload();
    }
  };

  let editComment;
  if (Number(authId) === Number(comment.author) || isAdmin === 1) {
    editComment = (
      <div className="flex">
        <PencilAltIcon
          className="h-6 m-2.5 mr-0.5 text-gray-700 cursor-pointer"
          onClick={handleEdit}
        />
        <XCircleIcon
          className="h-6 m-2.5 ml-0.5 text-gray-700 cursor-pointer"
          onClick={handleDelete}
        />
      </div>
    );
  } else {
    editComment = "";
  }

  return (
    <div className="w-full flex flex-col mb-2">
      <div className="w-full flex justify-between">
        <div className="flex gap-1.5 pl-1.5 pt-1.5 text-sm">
          <Link
            to={`/profile/${comment.author}`}
            key={comment.author}
            className="rounded-full"
          >
            <img
              src={authorPic}
              alt="Avatar"
              className="h-7 w-7 object-cover rounded-full"
            />
          </Link>
          <span>
            <Link
              to={`/profile/${comment.author}`}
              key={comment.author}
              href="#"
              className="font-bold"
            >
              {authorName}
            </Link>
            , <TimeAgo date={comment.date} formatter={formatter} />
          </span>
        </div>
        {editComment}
      </div>
      {!isEdit ? (
        <p className="ml-10 -mt-1.5">{comment.text}</p>
      ) : (
        <textarea
          rows="5"
          className="ml-8 mr-4 p-2 -mt-1.5 focus:outline-none border"
          maxLength="10000"
          placeholder="Texte"
          onChange={handleText}
          value={text}
          name="text"
        />
      )}
      {isEdit ? (
        <div className="flex gap-1.5 w-full pl-1 pb-1.5 mt-1 ml-8">
          <button
            onClick={handleModify}
            type="submit"
            className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 bg-primary border-primary text-white cursor-pointer"
          >
            Modifier
          </button>
          <button
            onClick={handleCancel}
            type="submit"
            className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 cursor-pointer"
          >
            Annuler
          </button>
        </div>
      ) : null}
    </div>
  );
}
