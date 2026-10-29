import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import AllProducts from './pages/AllProducts'
import ProductDets from './pages/ProductDets'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<AllProducts />} />
      <Route path='/products/:id' element={<ProductDets />} />
    </Routes>
  )
}

export default App
