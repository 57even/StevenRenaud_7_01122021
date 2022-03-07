import React, { useState, useEffect } from "react";
import axios from "axios";
import profilePic from "../icons/profile_pic.png";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProfileForm() {
  let authId;
  if (JSON.parse(localStorage.getItem("token"))) {
    authId = JSON.parse(localStorage.getItem("token")).userId;
  }
  const { userId } = useParams();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  let editHide = "hidden";

  useEffect(() => {
    axios
      .get(`http://localhost:3000/users/${userId}`)
      .then((res) => {
        setFirstName(res.data.user.firstName);
        setLastName(res.data.user.lastName);
        setEmail(res.data.user.email);
        setBirthday(res.data.user.birthday);
        setGender(res.data.user.gender);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  if (Number(authId) === Number(userId)) {
    editHide = "";
  }

  return (
    <main className="flex flex-col items-center py-32">
      <div className="w-80 flex flex-col items-center bg-white p-5 rounded-md border">
        <img
          src={profilePic}
          alt="Avatar"
          className="h-13 w-13 object-cover rounded-full p-2 pb-4"
        />
        <div className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label htmlFor="name">Prénom : {firstName}</label>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="lastName">Nom : {lastName}</label>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="email">Email : {email}</label>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Date de Naissance : {birthday}</label>
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password">Genre : {gender}</label>
          </div>
        </div>
        <Link
          to="./edit"
          className={`${editHide} m-4 bg-primary rounded-xl border px-3 py-1.5 text-white`}
        >
          Modifier le Profil
        </Link>
      </div>
    </main>
  );
}
