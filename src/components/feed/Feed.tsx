import React from 'react'
import PostFeed from './PostFeed'

const Feed = () => {
  return (
    <>
      <div className="p-4 bg-white shadow-md rounded-lg flex flex-col gap-12">
        <PostFeed />
      </div>
    </>
  )
}

export default Feed