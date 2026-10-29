import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import { Link, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Nav from './components/Nav'
import Men from './pages/Men'
import Women from './pages/Women'
import RandomAbout from './pages/RandomAbout'
import Courses from './pages/Courses'
import Cohort1 from './pages/Cohort1'
import Cohort2 from './pages/Cohort2'
import AnyCourse from './pages/AnyCourse'
import CourseDetail from './pages/CourseDetail'
import NotFound from './pages/NotFound'

const App = () => {
  return (
   <>
    <Nav/>      

    <Routes>

      {/* Simple Route  */}
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/product' element={<Product />} />

        {/* Nested Route  */}
      <Route path='/product/men' element={<Men />} />
      <Route path='/product/women' element={<Women />} />


        {/* Dynamic Route  */}
      <Route path='/about/:id' element={<RandomAbout />} />

      
      <Route path='/courses' element={<Courses />} />
      <Route path='/courses/cohort1' element={<Cohort1  />} />
      <Route path='/courses/cohort2' element={<Cohort2 />}  />

          {/* Nested Dynamic Route  */}
      <Route path='/courses/:id' element={<AnyCourse />} />
      <Route path='/courses/:id/detail' element={<CourseDetail />} />
      <Route />



      {/* Not Found Page  */}
      <Route path='*' element={ <NotFound /> } />
    </Routes>
   </>
  )
}

export default App