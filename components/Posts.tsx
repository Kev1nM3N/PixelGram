import { fetchPosts } from "@/lib/data";
import React from "react";
import Post from "./Post";

async function Posts() {
  const posts = await fetchPosts();

  return (
    <>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}

export default Posts;
