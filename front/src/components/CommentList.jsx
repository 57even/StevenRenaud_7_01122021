import React, { useState, useEffect } from "react";
import Comment from "./Comment";
import axios from "axios";
import { useParams } from "react-router-dom";
import CreateCommentCard from "./CreateCommentCard";

export default function CommentList({ formatter, commentCount }) {
  const [comments, setComments] = useState([]);
  let { postId } = useParams();

  useEffect(() => {
    (async () => {
      try {
        if (commentCount !== 0) {
          const res = await axios.get(
            `http://localhost:3000/posts/${postId}/comments`
          );
          setComments(res.data.comments);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, [commentCount, postId]);

  return (
    <section className="flex flex-col items-center -mt-5 mb-2">
      <div className="flex flex-col items-center gap-2.5 w-45rem rounded-md border bg-white">
        <CreateCommentCard />
        {comments.map((comment) => {
          return (
            <Comment key={comment.id} comment={comment} formatter={formatter} />
          );
        })}
      </div>
    </section>
  );
}
