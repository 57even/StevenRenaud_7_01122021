import React, { useState } from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Thread from "./routes/Thread";
import Login from "./routes/Login";
import Signup from "./routes/Signup";
import Profile from "./routes/Profile";
import EditProfile from "./routes/EditProfile";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import frenchStrings from "react-timeago/lib/language-strings/fr";
import buildFormatter from "react-timeago/lib/formatters/buildFormatter";
import TopBar from "./components/TopBar";

const rootElement = document.getElementById("root");
const formatter = buildFormatter(frenchStrings);

const App = () => {
  let [searchFilter, setSearchFilter] = useState("");
  let [isAuth, setIsAuth] = useState(false);
  return (
    <>
      <TopBar
        setSearchFilter={setSearchFilter}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              formatter={formatter}
              searchFilter={searchFilter}
              isAuth={isAuth}
            />
          }
        />
        <Route path="posts">
          <Route
            path=":postId"
            element={<Thread formatter={formatter} isAuth={isAuth} />}
          />
        </Route>
        <Route path="login" element={<Login isAuth={isAuth} />} />
        <Route path="signup" element={<Signup />} />
        <Route path="profile">
          <Route path=":userId" element={<Profile />} />
        </Route>
        <Route path="profile/:profileId/edit" element={<EditProfile />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </>
  );
};

//Render app into the root HTML DOM node
render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  rootElement
);

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
