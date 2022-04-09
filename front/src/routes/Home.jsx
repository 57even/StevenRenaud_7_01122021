import React from "react";
import PostCardList from "../components/PostCardList";

export default function Home({ formatter, searchFilter, isAuth }) {
  return (
    <PostCardList
      searchFilter={searchFilter}
      formatter={formatter}
      isAuth={isAuth}
    />
  );
}
