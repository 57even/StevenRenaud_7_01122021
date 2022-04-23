import React, { useEffect } from "react";
import SignupForm from "../components/SignupForm";

export default function Signup() {
  useEffect(() => {
    document.title = "Groupomania - Inscription";
  }, []);

  return <SignupForm />;
}
