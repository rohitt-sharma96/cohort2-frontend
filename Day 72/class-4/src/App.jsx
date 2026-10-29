import React from 'react'

const App = () => {
    const click = ()=>{
      console.log('Button is clicked...')
    }

  return (
    <div>
      <button onClick={ click} className=' active:scale-95 bg-emerald-500 px-3 py-2 rounded text-white font-bold m-5'>Click to Download</button>
    </div>
  )
}

export default App
