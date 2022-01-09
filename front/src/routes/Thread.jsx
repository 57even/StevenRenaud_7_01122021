import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import FirstPost from "../components/FirstPost";
import CommentList from "../components/CommentList";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Thread({ formatter }) {
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { postId } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:3000/posts/${postId}`)
      .then((res) => {
        setPost(res.data.post);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [postId]);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <React.Fragment>
      <TopBar />
      <main>
        {console.log(post)}
        <FirstPost key={post.id} post={post} formatter={formatter} />
        <CommentList formatter={formatter} />
        <Outlet />
      </main>
    </React.Fragment>
  );
}
