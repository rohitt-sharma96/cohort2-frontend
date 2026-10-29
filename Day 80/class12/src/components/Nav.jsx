import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav flex gap-6 px-8 py-4 bg-sky-500'>
            <NavLink to='/'
                className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white'
                }
            >Home</NavLink>
            <NavLink to='/about'
                className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white'
                }
            >About</NavLink>

            <NavLink to='/courses'
                className={({ isActive }) =>
                    isActive ? 'text-red-500' : 'text-white'
                }
            >Courses</NavLink>

        </div>
    )
}

export default Nav