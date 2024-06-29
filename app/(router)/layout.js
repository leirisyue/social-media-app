import React from 'react'
import SideNav from './_components/SideNav'

function layout({ children }) {
  return (
    <>
      <div className='sm:w-64 sm:block fixed'>
        <SideNav />
      </div>
      <div className="ml-64">
        {children}
      </div>
    </>
  )
}
// 25:10
export default layout