import React, { useEffect, useState } from "react";
import TopBarDesktop from "../components/TopBarDesktop";
import TopBarMobile from "../components/TopBarMobile";
import useMediaQuery from "../hooks/useMediaQuery";
import axios from "axios";
import profilePic from "../icons/profile_pic.png";

export default function TopBar({ isAuth, setIsAuth, setSearchFilter }) {
  const [auth, setAuth] = useState();
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [authorPic, setAuthorPic] = useState(profilePic);
  useEffect(() => {
    (async () => {
      if (JSON.parse(localStorage.getItem("token"))) {
        try {
          let token = JSON.parse(localStorage.getItem("token")).token;
          let userId = JSON.parse(localStorage.getItem("token")).userId;

          const res = await axios.post(
            "http://localhost:3000/users/auth",
            { userId },
            { headers: { Authorization: `Bearer ${token}` } }
          );
          setAuth(res.data.auth);
          if (typeof isAuth == "boolean") {
            setIsAuth(true);
          }
          setUserId(userId);

          const res1 = await axios.get(`http://localhost:3000/users/${userId}`);
          let firstName = res1.data.user.firstName;
          let lastName = res1.data.user.lastName;
          setUserName(`${firstName} ${lastName}`);
          setAuthorPic(res1.data.user.avatar);
        } catch (error) {
          console.log(error);
          localStorage.removeItem("token");
          window.location.reload();
        }
      } else {
        setAuth(false);
        if (typeof isAuth == "boolean") {
          setIsAuth(false);
        }
      }
    })();
  }, [isAuth, setIsAuth]);

  const isMobile = useMediaQuery("(max-width: 875px)");
  return (
    <>
      {!isMobile ? (
        <TopBarDesktop
          setSearchFilter={setSearchFilter}
          auth={auth}
          userId={userId}
          userName={userName}
          authorPic={authorPic}
        />
      ) : (
        <TopBarMobile
          setSearchFilter={setSearchFilter}
          auth={auth}
          userId={userId}
          authorPic={authorPic}
        />
      )}
    </>
  );
}
