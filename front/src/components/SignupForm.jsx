import React, { useState } from "react";
import axios from "axios";

export default function SignupForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [confirmPwd, setConfirmPwd] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

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
        await axios.post("http://localhost:3000/auth/signup", {
          firstName,
          lastName,
          email,
          pwd,
          birthday,
          gender,
        });
        setSubmitted(true);
        setError(false);
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
        <h1 className="text-center">
          Au moins un des champs n'est pas rempli correctement
        </h1>
      </div>
    );
  };

  return (
    <main className="flex flex-col items-center py-32">
      <div className="w-80 flex flex-col items-center bg-white p-5 rounded-md border">
        <h1 className="w-24 m-2 border-b mb-3 text-center text-lg">
          Inscription
        </h1>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        <form className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label for="firstName">Prénom :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleFirstName}
              value={firstName}
              type="text"
              name="firstName"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="lastName">Nom :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleLastName}
              value={lastName}
              type="text"
              name="lastName"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="email">Email :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleEmail}
              value={email}
              type="email"
              name="email"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="pwd">Mot de Passe :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handlePwd}
              value={pwd}
              type="password"
              name="pwd"
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleConfirmPwd}
              value={confirmPwd}
              type="password"
              name="confirmPwd"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="birthday">Date de Naissance :</label>
            <input
              className="ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              onChange={handleBirthday}
              value={birthday}
              type="date"
              name="birthday"
            />
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Genre :</label>
            <select
              className="ml-2 my-1 bg-white border rounded-sm focus:outline-none focus:border-primary p-1"
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
            className="m-4 bg-primary rounded-xl border px-3 py-1.5 text-white"
          >
            Créer un Compte
          </button>
        </form>
      </div>
    </main>
  );
}
