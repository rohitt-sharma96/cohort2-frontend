import React, { useContext } from 'react'
import { ThemeDataContext } from '../context/ThemeContext'

const Section1 = () => {

        let data = useContext(ThemeDataContext);
  return (
    <div>
      <h1>Section1 - {data}</h1>
    </div>
  )
}

export default Section1
