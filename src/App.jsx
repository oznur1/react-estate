import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import About from './pages/About'
import Projects from './pages/Projects'
import Testimoniols from './pages/Testimoniols'

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
         <Route path='/Testimoniols' element={<Testimoniols/>}/>
       

    </Routes>
    
    </BrowserRouter>
  )
}

export default App
