import React from "react";
import TopBar from "../components/TopBar";
import PostCardList from "../components/PostCardList";

export default function Home() {
  return (
    <React.Fragment>
      <TopBar />
      <PostCardList />
    </React.Fragment>
  );
}
