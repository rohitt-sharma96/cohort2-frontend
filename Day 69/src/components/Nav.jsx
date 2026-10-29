import React from 'react'
import './Nav.css'

const Nav = () => {
  return (
    <div>
      <nav className='nav'>
        <h1 className='Hori'>Horizon Courts</h1>
            <ul className="tags">
                <li>About us</li>
                <li>Services</li>
                <li>Coaches</li>
                <li>Events</li>
                <li>Contacts</li>
            </ul>
        <div className='button-parent'>
        <button className='btn'>Book now</button>
        <i className="arrow ri-arrow-right-up-long-line"></i>
        </div>
      </nav>
    </div>
  )
}

export default Nav
