import React from 'react';
import TopBar from '../components/TopBar';
import FirstPost from '../components/FirstPost';
import CommentList from '../components/CommentList';
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Thread() {
  let params = useParams();
  return (
    <React.Fragment>
      <TopBar />
      <main>
        <FirstPost />
        <CommentList />
        <Outlet />
      </main>
    </React.Fragment>
  );
}
