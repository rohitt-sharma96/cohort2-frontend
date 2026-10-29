import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Courses from './pages/Courses'
import Kodr from './pages/Kodr'
import Kodex from './pages/Kodex'
import AllCourses from './pages/AllCourses'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <Nav />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />

         <Route path='/courses' element={<Courses />} > {/*//Parent */}
              <Route path='/courses' element={<AllCourses />} />
             <Route path='/courses/kodr' element={<Kodr />} />  {/*//Child */}
             <Route path='/courses/kodex' element={<Kodex />} />  {/*//Child */}
        </Route>

      </Routes>

      <Footer />ff
    </div>
  )
}

export default App