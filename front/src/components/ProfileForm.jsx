import React from 'react';
import profilePic from '../icons/profile_pic.png';
import { Link } from 'react-router-dom'

export default function ProfileForm() {
  return (
    <main className="flex flex-col items-center py-32">
      <div className="w-80 flex flex-col items-center bg-white p-5 rounded-md border">
        <img src={profilePic} alt="Avatar" className="h-13 w-13 object-cover rounded-full p-2 pb-4"/>
        <div className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label for="name">Prénom : John</label>
          </div>
          <div className="flex flex-col items-center">
            <label for="lastName">Nom : Doe</label>
          </div>
          <div className="flex flex-col items-center">
            <label for="email">Email : email@example.com</label>
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Date de Naissance : 23/09/1986</label>
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Genre : Homme</label>
          </div>
        </div>
        <Link to="./edit" className="m-4 bg-primary rounded-xl border px-3 py-1.5 text-white">Modifier le Profil</Link>
      </div>
    </main>
  );
}
