import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./EditProfileForm.css";

export default function EditProfileForm() {
  const navigate = useNavigate();
  const { profileId } = useParams();
  const [avatar, setAvatar] = useState("");
  const [avatarPreview, setAvatarPreview] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPasswordConfirmation, setNewPasswordConfirmation] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleAvatar = (e) => {
    let file = e.target.files[0];
    const img = new Image();
    img.src = URL.createObjectURL(file);
    img.onload = function () {
      if (this.width > 1920 || this.height > 1920 || file.size > 5000000) {
        alert("Maximum 1920x1920 et 5mb");
      } else {
        setAvatar(file);
        setAvatarPreview(URL.createObjectURL(file));

        setSubmitted(false);
      }
    };
  };

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

  const handleBirthday = (e) => {
    setBirthday(e.target.value);
    setSubmitted(false);
  };

  const handleGender = (e) => {
    setGender(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleNewPassword = (e) => {
    setNewPassword(e.target.value);
    setSubmitted(false);
  };

  const handleNewPasswordConfirmation = (e) => {
    setNewPasswordConfirmation(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !avatar ||
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      birthday === "" ||
      gender === "" ||
      newPassword !== newPasswordConfirmation
    ) {
      setError(true);
    } else {
      (async () => {
        try {
          let newPwd = false;
          if (newPassword !== "") {
            newPwd = newPassword;
          }

          let token = JSON.parse(localStorage.getItem("token")).token;
          let formData = new FormData();
          formData.append("avatar", avatar);
          formData.append("firstName", firstName);
          formData.append("lastName", lastName);
          formData.append("email", email);
          formData.append("pwd", password);
          formData.append("newPwd", newPwd);
          formData.append("birthday", birthday);
          formData.append("gender", gender);

          await axios({
            method: "put",
            url: `http://localhost:3000/users/${profileId}`,
            data: formData,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          });

          setSubmitted(true);
          setError(false);
          navigate(`/profile/${profileId}`);
        } catch (error) {
          console.log(error);
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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${profileId}`)
      .then((res) => {
        setAvatar(res.data.user.avatar);
        setAvatarPreview(res.data.user.avatar);
        setFirstName(res.data.user.firstName);
        setLastName(res.data.user.lastName);
        setEmail(res.data.user.email);
        setBirthday(res.data.user.birthday);
        setGender(res.data.user.gender);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [profileId]);

  return (
    <main className="flex flex-col items-center py-14">
      <div className="w-80 flex flex-col items-center bg-white p-5 rounded-md border">
        <img
          src={avatarPreview}
          alt="Avatar"
          className="h-56 w-56 object-cover rounded-50 p-2 pb-4"
        />
        <input
          className="flex mb-2.5"
          type="file"
          id="avatar"
          name="avatar"
          accept="image/*"
          onChange={handleAvatar}
        />
        <div className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label htmlFor="name">Prénom :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="text"
              id="name"
              name="name"
              onChange={handleFirstName}
              value={firstName}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="lastName">Nom :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="text"
              id="lastName"
              name="lastName"
              onChange={handleLastName}
              value={lastName}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email">Email :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="email"
              id="email"
              name="email"
              onChange={handleEmail}
              value={email}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Mot de Passe actuel :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="password"
              id="password"
              name="password"
              onChange={handlePassword}
              value={password}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Nouveau Mot de Passe :</label>
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="password"
              id="newPassword"
              name="newPassword"
              onChange={handleNewPassword}
              value={newPassword}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <input
              className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="password"
              id="newPasswordConfirmation"
              name="newPasswordConfirmation"
              onChange={handleNewPasswordConfirmation}
              value={newPasswordConfirmation}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Date de Naissance :</label>
            <input
              className="ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1"
              type="date"
              id="birthday"
              name="birthday"
              onChange={handleBirthday}
              value={birthday}
              required
              minLength="4"
              maxLength="8"
              size="10"
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Genre :</label>
            <select
              className="ml-2 my-1 bg-white border rounded-sm focus:outline-none focus:border-primary p-1"
              id="gender"
              name="gender"
              onChange={handleGender}
              value={gender}
            >
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </div>
        </div>
        {errorMessage()}
        {successMessage()}
        <button
          onClick={handleSubmit}
          type="submit"
          className="m-4 bg-primary rounded-xl border px-3 py-1.5 text-white"
        >
          Enregistrer
        </button>
      </div>
    </main>
  );
}
