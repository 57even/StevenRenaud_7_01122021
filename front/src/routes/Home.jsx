import React, { useState } from "react";
import TopBar from "../components/TopBar";
import PostCardList from "../components/PostCardList";

export default function Home({ formatter }) {
  let [searchFilter, setSearchFilter] = useState("");
  return (
    <React.Fragment>
      <TopBar setSearchFilter={setSearchFilter} />
      <PostCardList searchFilter={searchFilter} formatter={formatter} />
    </React.Fragment>
  );
}
