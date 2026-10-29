import React, { useState } from 'react'
import Man from './components/Man';
import Woman from './components/Woman';
import Washroom from './components/Washroom'


const App = () => {

  const [gender, setGender] = useState('Male');

  function changeGender() {
    if (gender === 'Male') {
      setGender('Female')

    } else if (gender === 'Female') {
      setGender('Others')
      
    } else {
      setGender('Male')
    }
  }

  return (
    <div>
      <h1>{gender}</h1>
      <button onClick={changeGender}>Change Gender</button>
      <Washroom user={gender} />
    </div>
  )
}

export default App
