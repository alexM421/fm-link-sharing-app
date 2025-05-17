import React from 'react'
import { Routes, Route } from "react-router-dom"


import './App.css'



function App() {


  return (
    <Routes>
      <Route path="/auth" element={<h1>AuthLayout</h1>}>
        <Route path="/login" element={<h1>Login</h1>}/>
        <Route path="/sign-up" element={<h1>Sign Up</h1>}/>
      </Route>
      <Route path="/home" element={<h1>HomeLayout</h1>}>
        <Route path="/links" element={<h1>Links</h1>}/>
        <Route path="/profile" element={<h1>Profile</h1>}/>
        <Route path='/preview' element={<h1>Preview</h1>}/>
      </Route>
    </Routes>
  )
}

export default App
