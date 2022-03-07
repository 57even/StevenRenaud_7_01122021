import React, { useState, useEffect } from "react";
import PostCard from "./PostCard";
import CreatePostCard from "../components/CreatePostCard";
import axios from "axios";

export default function PostCardList({ formatter, searchFilter }) {
  const [posts, setPosts] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        let res;
        if (searchFilter.length > 2) {
          res = await axios.get(`http://localhost:3000/posts/${searchFilter}`);
        } else {
          res = await axios.get("http://localhost:3000/");
        }
        setPosts(res.data.posts);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [searchFilter]);

  if (isLoading) {
    return <>Loading...</>;
  }
  return (
    <main className="flex flex-col justify-center items-center py-8 p-3">
      <div className="w-full m-5 flex flex-col items-center justify-center gap-2">
        <CreatePostCard />
        {posts.reverse().map((post) => {
          return <PostCard key={post.id} post={post} formatter={formatter} />;
        })}
      </div>
    </main>
  );
}
