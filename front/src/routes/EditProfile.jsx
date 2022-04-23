import React, { useEffect } from "react";
import EditProfileForm from "../components/EditProfileForm";

export default function EditProfile() {
  useEffect(() => {
    document.title = "Groupomania - Modifier le Profil";
  }, []);
  return <EditProfileForm />;
}
