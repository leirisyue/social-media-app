import Image from 'next/image'
import React, { Suspense } from 'react'
import PostInfo from './PostInfo'
import PostInteraction from './PostInteraction'
import Comments from './Comments'

const PostFeed = () => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {/* USER */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Image
              src="https://images.pexels.com/photos/26690718/pexels-photo-26690718/free-photo-of-a-large-lizard-sitting-on-the-ground.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              width={40}
              height={40}
              alt=""
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium">test</span>
          </div>
          <PostInfo />
        </div>
        {/* DESC */}
        <div className="flex flex-col gap-4">
          <div className="w-full min-h-96 relative">
            <Image
              src="https://images.pexels.com/photos/6769533/pexels-photo-6769533.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load"
              fill
              className="object-cover rounded-md"
              alt=""
            />
          </div>
          <p>test</p>
        </div>
        {/* INTERACTION */}
        <Suspense fallback="Loading...">
          <PostInteraction />
        </Suspense>
        <Suspense fallback="Loading...">
          <Comments />
        </Suspense>
      </div>
    </>
  )
}

export default PostFeed