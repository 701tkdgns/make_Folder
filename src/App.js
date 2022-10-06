import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Login, DashBoard, SignUp } from './pages'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/' element={<DashBoard/>}/>        
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App