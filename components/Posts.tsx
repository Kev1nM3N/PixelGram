import { fetchPosts } from '@/lib/data';
import React from 'react'
//6:33:05

async function Posts() {
  const posts = await fetchPosts();

  return (
    <>
      hwloo world
    </>
  )
}

export default Posts