import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function LoginForm({ isAuth }) {
  const navigate = useNavigate();
  if (isAuth == 1) {
    navigate("/");
  }

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || pwd === "") {
      setError(true);
    } else {
      (async () => {
        let request = await axios.post("http://localhost:3000/users/login", {
          email,
          pwd,
        });
        localStorage.setItem("token", JSON.stringify(request.data));

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
        <h1>Connexion en cours</h1>
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
        <h1 className="text-center">Au moins un des champs est incorrect</h1>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center py-14 mx-2">
      <div className="max-w-xs w-full flex flex-col items-center justify-center bg-white p-5 rounded-md border">
        <h1 className="m-2 border-b mb-3 text-center text-lg">Connexion</h1>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form className="w-full flex flex-col items-center gap-2 m-2">
          <div className="w-full flex flex-col items-center">
            <label>Email :</label>
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleEmail}
              value={email}
              type="text"
              name="email"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Mot de Passe :</label>
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handlePwd}
              value={pwd}
              type="password"
              name="pwd"
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-11/12 my-4 bg-primary rounded-xl border px-3 py-1.5 text-white"
          >
            Se Connecter
          </button>
        </form>
      </div>
    </main>
  );
}
