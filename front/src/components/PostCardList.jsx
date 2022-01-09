import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";

export default function PostCardList({ formatter }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setPosts(res.data.posts);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <main className="flex flex-col justify-center items-center py-8 p-3">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        {posts.reverse().map((post) => {
          return <PostCard key={post.id} post={post} formatter={formatter} />;
        })}
      </section>
    </main>
  );
}
