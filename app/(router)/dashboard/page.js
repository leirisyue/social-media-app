import React from 'react'
import WelcomeBanner from './_conponents/WelcomeBanner'

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 p-5">
        {/* Left Container */}
        <div className='col-span-2'>
          <WelcomeBanner/>
        </div>
        {/* Right Container */}
        <div className=''>
          Right Section
        </div>
      </div>
    </>
  )
}

export default Dashboard