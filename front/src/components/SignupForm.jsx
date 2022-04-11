import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function SignupForm() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [errorMsg, setErrorMsg] = useState(
    "Au moins un des champs n'est pas rempli correctement"
  );

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    setSubmitted(false);
  };

  const handleLastName = (e) => {
    setLastName(e.target.value);
    setSubmitted(false);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePwd = (e) => {
    setPwd(e.target.value);
    setSubmitted(false);
  };

  const handleConfirmPwd = (e) => {
    setConfirmPwd(e.target.value);
    setSubmitted(false);
  };

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    setSubmitted(false);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  // Handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      pwd === "" ||
      pwd !== confirmPwd ||
      birthday === "" ||
      gender === ""
    ) {
      setError(true);
    } else {
      (async () => {
        try {
          await axios.post("http://localhost:3000/users/signup", {
            firstName,
            lastName,
            email,
            pwd,
            birthday,
            gender,
          });
          setSubmitted(true);
          setError(false);
          navigate("/login");
        } catch (error) {
          setError(true);
          setErrorMsg(error.response.data.error);
        }
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
        <h1>Compte créé avec succès !</h1>
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
        <h1 className="text-center">{errorMsg}</h1>
      </div>
    );
  };

  const errorSamePwd = () => {
    let errorPwd = false;
    if (confirmPwd != "" && pwd !== confirmPwd) {
      errorPwd = true;
    }
    return (
      <div
        className="errorSamePwd"
        style={{
          display: errorPwd ? "" : "none",
        }}
      >
        <h1 className="text-center font-light">
          Les mot de passes de correspondent pas
        </h1>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center py-14 mx-2">
      <div className="max-w-xs w-full flex flex-col items-center bg-white p-5 rounded-md border">
        <h1 className="m-2 border-b mb-3 text-center text-lg">Inscription</h1>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form className="w-full flex flex-col gap-2 m-2">
          <div className="w-full flex flex-col items-center">
            <label>Prénom :</label>
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleFirstName}
              value={firstName}
              type="text"
              name="firstName"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Nom :</label>
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleLastName}
              value={lastName}
              type="text"
              name="lastName"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Email :</label>
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleEmail}
              value={email}
              type="email"
              name="email"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Mot de Passe :</label>
            {errorSamePwd()}
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handlePwd}
              value={pwd}
              type="password"
              name="pwd"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <input
              className="w-11/12 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleConfirmPwd}
              value={confirmPwd}
              type="password"
              name="confirmPwd"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Date de Naissance :</label>
            <input
              className="my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleBirthday}
              value={birthday}
              type="date"
              name="birthday"
            />
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Genre :</label>
            <select
              className="my-1 bg-white border rounded-sm focus:outline-none focus:border-primary p-1"
              name="gender"
              onChange={handleGender}
              value={gender}
            >
              <option value="">Choisir</option>
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className="w-11/12 my-4 bg-primary rounded-xl border px-3 py-1.5 text-white"
          >
            Créer un Compte
          </button>
        </form>
      </div>
    </main>
  );
}
