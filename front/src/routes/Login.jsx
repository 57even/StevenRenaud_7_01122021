import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login({ isAuth }) {
  return <LoginForm isAuth={isAuth} />;
}
