import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function CreateCommentCard() {
  const { postId } = useParams();
  let token;
  let author;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    author = JSON.parse(localStorage.getItem("token")).userId;
  }
  const [text, setText] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleText = (e) => {
    setText(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === "") {
      setError(true);
    } else {
      (async () => {
        await axios.post(
          `http://localhost:3000/posts/${postId}/comments`,
          {
            author,
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
        <h1>Commentaire créé avec succès !</h1>
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
    <div className="flex flex-col w-full">
      <div className="flex w-full pl-3 pt-1 pb-0.5 -mb-0.5 relative text-gray-800 bg-gray-50 rounded-t-md border">
        <h3>Commenter</h3>
      </div>
      <form className="flex flex-col items-center rounded-b-md bg-white w-full px-1 border">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div className="flex flex-col m-1 px-1.5 py-1 border w-full">
          <textarea
            rows="3"
            className="w-full text-lg focus:outline-none"
            placeholder="Texte"
            maxLength="10000"
            onChange={handleText}
            value={text}
            name="text"
          />
        </div>
        <div className="flex w-full pl-1 pb-1">
          <button
            onClick={handleSubmit}
            type="submit"
            className="flex gap-1.5 items-center border rounded-lg px-1.5 py-0.5 bg-primary border-primary text-white cursor-pointer"
          >
            Publier
          </button>
        </div>
      </form>
    </div>
  );
}
