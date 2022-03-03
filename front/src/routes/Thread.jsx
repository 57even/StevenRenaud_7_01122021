import React, { useState, useEffect } from "react";
import axios from "axios";
import TopBar from "../components/TopBar";
import FirstPost from "../components/FirstPost";
import EditPost from "../components/EditPost";
import CommentList from "../components/CommentList";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Thread({ formatter }) {
  const [isLoading, setLoading] = useState(true);
  const [post, setPost] = useState(null);
  const { postId } = useParams();
  const [isEdit, setIsEdit] = useState(false);

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
      <main className="py-8 p-3">
        <div className="w-full m-5 flex flex-col items-center justify-center gap-6">
          {!isEdit ? (
            <FirstPost
              key={post.id}
              post={post}
              formatter={formatter}
              setIsEdit={setIsEdit}
            />
          ) : (
            <EditPost
              key={post.id}
              post={post}
              formatter={formatter}
              setIsEdit={setIsEdit}
            />
          )}
          <CommentList formatter={formatter} />
          <Outlet />
        </div>
      </main>
    </React.Fragment>
  );
}
