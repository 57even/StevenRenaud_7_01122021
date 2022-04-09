import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function ProfileForm() {
  let authId;
  let isAdmin;
  if (JSON.parse(localStorage.getItem("token"))) {
    authId = JSON.parse(localStorage.getItem("token")).userId;
    isAdmin = JSON.parse(localStorage.getItem("token")).isAdmin;
  }
  const { userId } = useParams();
  const [avatar, setAvatar] = useState("");
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
        setAvatar(res.data.user.avatar);
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

  if (Number(authId) === Number(userId) || isAdmin == 1) {
    editHide = "";
  }

  return (
    <main className="flex flex-col items-center py-14 mx-2">
      <div className="max-w-xs w-full flex flex-col items-center bg-white p-5 rounded-md border">
        <img
          src={avatar}
          alt="Avatar"
          className="w-5/6 object-cover rounded-full p-2 pb-4"
        />
        <div className="w-full flex flex-col gap-2 m-2">
          <div className="w-full flex flex-col items-center">
            <label>Prénom : {firstName}</label>
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Nom : {lastName}</label>
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Email : {email}</label>
          </div>
          <div className="w-full flex flex-col items-center text-center">
            <label>Date de Naissance : {birthday}</label>
          </div>
          <div className="w-full flex flex-col items-center">
            <label>Genre : {gender}</label>
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
