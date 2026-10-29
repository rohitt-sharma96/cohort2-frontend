import { useState } from 'react'
import './app.scss'
import Dock from './components/Dock'
import Nav from './components/nav'
import MacWindow from './components/windows/MacWindow'
import Github from './components/windows/Github'
import Note from './components/windows/Note'

function App() {
  const [count, setCount] = useState(0)

  return (

    <main>
      <Nav />
      <Dock />
      <Github />
      <Note />
    </main>

  )
}

export default App
