import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Logado from './pages/logado/Logado'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logado" element={<Logado />} />
      </Routes>
    </Router>
  )
}

export default App
