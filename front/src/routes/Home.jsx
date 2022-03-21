import React, { useState } from "react";
import TopBar from "../components/TopBar";
import PostCardList from "../components/PostCardList";

export default function Home({ formatter }) {
  let [searchFilter, setSearchFilter] = useState("");
  let [isAuth, setIsAuth] = useState(false);
  return (
    <React.Fragment>
      <TopBar
        setSearchFilter={setSearchFilter}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
      />
      <PostCardList
        searchFilter={searchFilter}
        formatter={formatter}
        isAuth={isAuth}
      />
    </React.Fragment>
  );
}
