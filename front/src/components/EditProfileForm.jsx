import React from 'react';
import profilePic from '../icons/profile_pic.png';

export default function EditProfileForm() {
  return (
    <main className="flex flex-col items-center py-14">
      <div className="w-80 flex flex-col items-center bg-white p-5 rounded-md border">
        <img src={profilePic} alt="Avatar" className="h-13 w-13 object-cover rounded-full p-2 pb-4"/>
        <div className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label for="name">Prénom :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="text" id="name" name="name" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="lastName">Nom :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="text" id="lastName" name="lastName" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="email">Email :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="email" id="email" name="email" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Mot de Passe :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="password" id="password" name="password" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Date de Naissance :</label>
            <input className="ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="date" id="birthday" name="birthday" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Genre :</label>
            <select className="ml-2 my-1 bg-white border rounded-sm focus:outline-none focus:border-primary p-1" id="gender" name="gender">
              <option value="male">Homme</option>
              <option value="female">Femme</option>
            </select>
          </div>
        </div>
        <button className="m-4 bg-primary rounded-xl border px-3 py-1.5 text-white">Enregistrer</button>
      </div>
    </main>
  );
}
