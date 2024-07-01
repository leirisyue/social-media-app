
import Image from 'next/image'
import React from 'react'

function WelcomeBanner() {
  return (
    <div className='flex gap-5 items-center bg-white rounded-xl'>
      <Image src="/panda.png" alt="logo" width={120} height={120} />
      <div>
        <h2 className='font-bold text-[27px]'>Welcome to</h2>
        <h2 className='text-gray-500'>Explore, learn and Build Still Real Life project</h2>
      </div>
    </div>
  )
}

export default WelcomeBanner