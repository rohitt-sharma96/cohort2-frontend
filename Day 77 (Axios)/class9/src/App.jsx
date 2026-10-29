import React, { useEffect, useState } from 'react'
import Axios from 'axios';

import User from './components/User'

const App = () => {

  const [allData, setAllData] = useState([])

  const getData = async () => {
    let response = await Axios.get('https://jsonplaceholder.typicode.com/users');
    setAllData(response.data)
  }

  useEffect(() => {
    getData();
  }, [])


  return (
    <div >
      <div className="all-cards">
        {allData.map((elem, idx) => {
          return <div className='all-card' key={idx}>
            <User elem={elem} />
          </div>
        })}
      </  div>
    </div>
  )
}

export default App