import React from 'react'
import Nav from './components/Nav';
import Hero from './components/Hero';
import Cards from './components/Cards';
import Stats from './components/Stats';

const App = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Cards />
      <Stats />
      <Cards />
    </div>
  )
}

export default App
