import React, { useState } from "react";
import axios from "axios";

export default function EditPost({ post, setIsEdit }) {
  let token;
  let author;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    author = JSON.parse(localStorage.getItem("token")).userId;
  }
  const [title, setTitle] = useState(post.title);
  const [text, setText] = useState(post.text);

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleTitle = (e) => {
    setTitle(e.target.value);
    setSubmitted(false);
  };

  const handleText = (e) => {
    setText(e.target.value);
    setSubmitted(false);
  };

  const handleCancel = () => {
    setIsEdit(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || text === "") {
      setError(true);
    } else {
      (async () => {
        let userId = JSON.parse(localStorage.getItem("token")).userId;
        await axios.put(
          `http://localhost:3000/posts/${post.id}`,
          {
            userId,
            title,
            text,
          },
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setSubmitted(true);
        setError(false);
        window.location.reload();
      })();
    }
  };

  // Showing success message
  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Post créé avec succès !</h1>
      </div>
    );
  };

  // Showing error message if error is true
  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1 className="text-center">
          Au moins un des champs n'est pas rempli correctement
        </h1>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-center rounded-b-md bg-white w-45rem px-2 border">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div className="flex m-2 px-2.5 py-1 border w-full">
          <textarea
            rows="2"
            className="w-full text-lg focus:outline-none placeholder-black font-bold"
            maxLength="300"
            placeholder="Titre"
            onChange={handleTitle}
            value={title}
            name="title"
          />
        </div>
        <div className="flex flex-col m-2 mt-0 px-2.5 py-1 border w-full">
          <textarea
            rows="7"
            className="w-full text-lg focus:outline-none placeholder-black"
            maxLength="10000"
            placeholder="Texte (optionnel)"
            onChange={handleText}
            value={text}
            name="text"
          />
        </div>
        <div className="flex gap-1.5 w-full pl-1 pb-1.5 -mt-0.5">
          <button
            onClick={handleSubmit}
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
      </form>
    </div>
  );
}
