import React, { useEffect } from "react";
import LoginForm from "../components/LoginForm";

export default function Login({ isAuth }) {
  useEffect(() => {
    document.title = "Groupomania - Connexion";
  }, []);

  return <LoginForm isAuth={isAuth} />;
}
