import React, { useEffect, useState } from 'react'
import axios from 'axios';

const App = () => {
  const [counter, setCounter] = useState(0)

  const [username, setUsername] = useState('')

    const getUser = async ()=>{
      let response = await axios.get('https://randomuser.me/api/')
      setUsername(response.data.results[0].name.first + " " + response.data.results[0].name.first)
    }



    useEffect(()=>{
      getUser();
    },[counter])
 


  return (
    <div>
      {username} <br /><br />

      <button onClick={()=>{
          setCounter(counter+1)
      }}>change</button>
    </div>
  )
}

export default App