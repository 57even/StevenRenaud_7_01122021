import React from "react";
import TopBar from "../components/TopBar";
import PostCardList from "../components/PostCardList";

export default function Home({ formatter }) {
  return (
    <React.Fragment>
      <TopBar />
      <PostCardList formatter={formatter} />
    </React.Fragment>
  );
}
