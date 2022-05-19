import React from 'react'
import Post from './post'

const PostContainer = () => {
  return (
    <div className='flex flex-col'>
        <Post />
        <Post />
        <Post />
        <Post />
    </div>
  )
}

export default PostContainer