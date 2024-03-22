import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './components/signUpLogin/login'
import SignUp from './components/signUpLogin/signup'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}/>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />}/>
      </Routes>
   </BrowserRouter>
  </React.StrictMode>,
)
