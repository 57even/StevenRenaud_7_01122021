import React, { useEffect } from "react";
import ProfileForm from "../components/ProfileForm";

export default function Profile() {
  useEffect(() => {
    document.title = "Groupomania - Profil";
  }, []);

  return <ProfileForm />;
}
