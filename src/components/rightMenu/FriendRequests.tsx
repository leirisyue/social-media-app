import React from 'react'
import FriendRequestList from './FriendRequestList'
import Link from 'next/link'

const FriendRequests = () => {
  return (
    <>
      <div className="p-4 bg-white rounded-lg shadow-md text-sm flex flex-col gap-4">
      {/* TOP */}
      <div className="flex justify-between items-center font-medium">
        <span className="text-gray-500">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      {/* USER */}
      <FriendRequestList requests={requests}/>
      
    </div>
    </>
  )
}

export default FriendRequests