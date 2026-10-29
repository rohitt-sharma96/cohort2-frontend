import React, { useContext, useState } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Navbar = () => {

    const [theme,setTheme] = useContext(ThemeDataContext);

    return (
        <div className='nav'>
            <h1>This is NavBar </h1>
            <h2>
                
            </h2>
            <button onClick={()=>{
                theme==='light' ? setTheme('dark'): setTheme('light')
            }}>changeTheme</button>
        </div>
    )
}

export default Navbar
