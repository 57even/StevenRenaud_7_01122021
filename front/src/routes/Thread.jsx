import React, { useState, useEffect } from "react";
import axios from "axios";
import FirstPost from "../components/FirstPost";
import EditPost from "../components/EditPost";
import CommentList from "../components/CommentList";
import { Outlet } from "react-router-dom";
import { useParams } from "react-router-dom";

export default function Thread({ formatter, isAuth }) {
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

  return (
    <React.Fragment>
      {!isLoading ? (
        <main className="py-8 p-3">
          <div className="w-max-3xl w-full mt-5 flex flex-col items-center justify-center gap-6">
            {!isEdit ? (
              <FirstPost
                key={post.id}
                post={post}
                formatter={formatter}
                setIsEdit={setIsEdit}
                isAuth={isAuth}
              />
            ) : (
              <EditPost
                key={post.id}
                post={post}
                formatter={formatter}
                setIsEdit={setIsEdit}
              />
            )}
            <CommentList
              formatter={formatter}
              commentCount={post.commentCount}
              isAuth={isAuth}
            />
            <Outlet />
          </div>
        </main>
      ) : (
        <></>
      )}
    </React.Fragment>
  );
}
