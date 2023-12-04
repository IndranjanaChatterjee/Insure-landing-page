import { useState } from 'react'
import React from 'react'

import Navbar from './assets/Components/Navbar'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
    </>
  )
}

export default App
