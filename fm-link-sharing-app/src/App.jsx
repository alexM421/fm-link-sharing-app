import React from 'react'
import { Routes, Route } from "react-router-dom"

import './App.css'

import AuthLayout from './layouts/AuthLayout/AuthLayout'
import Login from './pages/Login/Login'
import SignUp from './pages/SignUp/SignUp'
import HomeLayout from './layouts/HomeLayout/HomeLayout'

function App() {


  return (
    <Routes>
      <Route path="/auth" element={<AuthLayout/>}>
        <Route path="login" element={<Login/>}/>
        <Route path="sign-up" element={<SignUp/>}/>
      </Route>
      <Route path="/" element={<HomeLayout/>}>
        <Route element={<h1>Links</h1>}/>
        <Route path="profile" element={<h1>Profile</h1>}/>
        <Route path='preview' element={<h1>Preview</h1>}/>
      </Route>
    </Routes>
  )
}

export default App
