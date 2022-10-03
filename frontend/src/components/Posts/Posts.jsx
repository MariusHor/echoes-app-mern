import React from 'react'
import { useSelector } from 'react-redux' // We use this to fetch the data from the global redux store

import Post from './Post/Post'
import './Posts.scss'

const Posts = () => {

  const posts = useSelector((state) => state.postsReducer) // the state parameter gives us access to the whole redux store/state. We then request the posts from the postsReducer
  console.log(posts)
  
  return (
    <>
        <h1>POSTS</h1>
        <Post />
        <Post />
    </>
  )
}

export default Posts