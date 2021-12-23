import React from 'react';

export default function LoginForm() {
  return (
    <main className="flex flex-col items-center py-32">
      <div className="flex flex-col items-center bg-white p-5 rounded-md border">
        <h1 className="w-24 m-2 border-b mb-3 text-center text-lg">Connexion</h1>
        <div className="flex flex-col gap-2 m-2">
          <div className="flex flex-col items-center">
            <label for="email">Email :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="text" id="email" name="email" required minlength="4" maxlength="8" size="10" />
          </div>
          <div className="flex flex-col items-center">
            <label for="password">Mot de Passe :</label>
            <input className="w-48 ml-2 my-1 border rounded-sm focus:outline-none focus:border-primary px-1" type="text" id="password" name="password" required minlength="4" maxlength="8" size="10" />
          </div>
        </div>
        <button className="m-4 bg-primary rounded-xl border px-3 py-1.5 text-white">Se Connecter</button>
      </div>
    </main>
  );
}
