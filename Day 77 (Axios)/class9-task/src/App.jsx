import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {

  useEffect(()=>{
    getData();
  },[])

  const [allData, setAllData] = useState([])

    const getData = async ()=>{
      let response = await axios.get('https://pokeapi.co/api/v2/language/6/')
      console.log(response.data.names)
      setAllData(response.data.names)
    }

  return (
    <div>
      {allData.map((elem,idx)=>{
        return <div key={idx} className="card">
        <h1>{elem.name}</h1>
      </div>
      })}
    </div>
  )
}

export default App