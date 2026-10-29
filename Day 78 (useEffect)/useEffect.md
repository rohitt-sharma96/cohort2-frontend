```js

import React, { useEffect, useState } from 'react'

const App = () => {

  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [number3, setNumber3] = useState(0)

  useEffect(()=>{
    console.log('use effect chal rha hai...')
  },[number1,number2]) 
  //* jab jab number1 and number2 naam ka dependency change hoga tab tab useEffect chalega

  //* Dependency mein hum waisi value daalte hai jo change hoti rahe (constant value nhi daal skte )

  return (
    <div>
     <h1>{number1}</h1>
     <button onClick={()=>{
      setNumber1(Math.floor(Math.random()*100))
     }}>Change Number1</button>

     <br />

     <h1>{number2}</h1>
     <button onClick={()=>{
      setNumber2(Math.floor(Math.random()*100))
     }}>Change Number2</button>

     <br />

     <h1>{number3}</h1>
     <button onClick={()=>{
      setNumber3(Math.floor(Math.random()*100))
     }}>Change Number3</button>
    </div>
  )
}

export default App




```