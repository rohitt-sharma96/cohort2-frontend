import React from 'react'
import Card from './components/Card'
import Button from './components/Button'

const App = () => {
  return (
    <div  className='h-screen p-3 bg-black  '>
     <Card />
     <Button text='Buy Now'/>
     <Button text='Explore Us'/>
     <Button text='About Us' />
    </div>
  )
}

export default App
