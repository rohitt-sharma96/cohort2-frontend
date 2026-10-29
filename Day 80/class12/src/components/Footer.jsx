import React from 'react'
import { useNavigate } from 'react-router-dom'

const Footer = () => {

    const navigate = useNavigate();


  return (
    <div className='footer flex justify-between w-screen absolute bottom-0 px-10 py-4 bg-blue-700'>
        <h2 className='text-5xl'>Footer</h2>
        <button onClick={()=>{
                navigate('/courses')
        }} className='bg-green-500 border-2 px-4 py-2 active:scale-95 rounded-md'>Explore Courses</button>
    </div>
  )
}

export default Footer