import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import axios from "axios";

export default function PostCardList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/")
      .then((res) => {
        setPosts(res.data.posts);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="flex flex-col justify-center items-center py-8 p-3">
      <section className="w-full m-5 flex flex-col items-center justify-center gap-2">
        {posts.map((post) => {
          return <PostCard key={post.id} post={post} />;
        })}
      </section>
    </main>
  );
}
