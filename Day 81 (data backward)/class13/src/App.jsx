import React, { useState } from 'react'
import axios from 'axios'

import Navbar from './components/Navbar'
import Allsections from './components/Allsections'
import Footer from './components/Footer'

const App = () => {

  
  const [theme, setTheme] = useState('light')
  console.log(theme)

  const changeTheme = (val)=>{
      setTheme(val);
  }

  return (
    <div>
      Theme color is {theme}
      <Navbar changeTheme = {changeTheme} />
    </div>
  )
}

export default App