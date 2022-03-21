import React, { useState } from "react";
import axios from "axios";

export default function CreatePostCard() {
  let token;
  let author;
  if (JSON.parse(localStorage.getItem("token"))) {
    token = JSON.parse(localStorage.getItem("token")).token;
    author = JSON.parse(localStorage.getItem("token")).userId;
  }
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const [imgPreview, setImgPreview] = useState("");

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

  const handleImage = (e) => {
    let file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      if (this.width > 1920 || this.height > 1920 || file.size > 5000000) {
        alert("Maximum 1920x1920 et 5mb");
      } else {
        setImage(file);
        setImgPreview(
          <img
            src={URL.createObjectURL(file)}
            alt="preview"
            className="mb-1.5"
          />
        );

        setSubmitted(false);
      }
    };
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "") {
      setError(true);
    } else {
      (async () => {
        let userId = JSON.parse(localStorage.getItem("token")).userId;

        if (image !== "") {
          let formData = new FormData();
          formData.append("userId", userId);
          formData.append("author", author);
          formData.append("title", title);
          formData.append("text", text);
          formData.append("image", image);

          await axios({
            method: "post",
            url: "http://localhost:3000/",
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });
        } else if (text !== "") {
          await axios.post(
            "http://localhost:3000/",
            {
              userId,
              author,
              title,
              text,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        } else {
          await axios.post(
            "http://localhost:3000/",
            {
              userId,
              author,
              title,
            },
            { headers: { Authorization: `Bearer ${token}` } }
          );
        }
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
        <h1 className="text-center">Veuillez renseigner un titre</h1>
      </div>
    );
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex w-45rem pl-3 pt-1 pb-0.5 -mb-0.5 relative text-gray-800 bg-gray-50 rounded-t-md border">
        <h3>Créer une publication</h3>
      </div>
      <form className="flex flex-col items-center rounded-b-md bg-white w-45rem px-2 border">
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <div className="flex m-2 px-2.5 py-1 border w-full">
          <input
            className="w-full text-lg focus:outline-none"
            placeholder="Titre"
            maxLength="300"
            onChange={handleTitle}
            value={title}
            type="text"
            name="title"
          />
        </div>
        {imgPreview}
        <div className="flex w-full mb-2">
          Image (optionnel) :
          <input
            className="flex ml-1.5"
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImage}
          />
        </div>
        <div className="flex flex-col m-2 mt-0 px-2.5 py-1 border w-full">
          <textarea
            rows="5"
            className="w-full text-lg focus:outline-none"
            placeholder="Texte (optionnel)"
            maxLength="10000"
            onChange={handleText}
            value={text}
            name="text"
          />
        </div>
        <div className="flex w-full pl-1 pb-1.5">
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
