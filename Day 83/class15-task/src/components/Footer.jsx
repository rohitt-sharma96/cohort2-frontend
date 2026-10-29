import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext';

const Footer = () => {

    let [theme,setTheme] = useContext(ThemeDataContext);
    
    
  return (
    <div className='footer'>
      <h1>This is Footer - {theme}</h1>
      <button onClick={()=>{
        theme==='light' ? setTheme('dark'): setTheme('light')
      }}>changeTheme</button>
    </div>
  )
}

export default Footer
