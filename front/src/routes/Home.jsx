import React, { useEffect } from "react";
import PostCardList from "../components/PostCardList";

export default function Home({ formatter, searchFilter, isAuth }) {
  useEffect(() => {
    document.title = "Groupomania";
  }, []);

  return (
    <PostCardList
      searchFilter={searchFilter}
      formatter={formatter}
      isAuth={isAuth}
    />
  );
}
