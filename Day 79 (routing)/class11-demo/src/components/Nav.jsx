import React from 'react'

import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-between px-8 py-4 mb-10 bg-pink-600 '>
    <h2>NavBar</h2>
    <input className='border-2' type="text" />
    <div className='flex gap-4'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/product'>Product</Link>
      <Link to='/courses'>Courses</Link>
    </div>
   </div>
  )
}

export default Nav