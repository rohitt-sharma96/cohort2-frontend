import React from 'react'
import { Outlet } from 'react-router-dom'

const Courses = () => {
  return (
    <div>
        
        <div className='bg-red-800 flex gap-6 flex-nowrap'>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
            <p className='shrink-0'>Sale is live!!!</p>
        </div>

        <Outlet />
    </div>
  )
}

export default Courses