import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
// import { response } from 'express'

const Login = () => {
  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [webtoken, setWebtoken] = useState('')
  const navigate = useNavigate()
  // Envia os dados do fomulário para o servidor via POST

  const handleLogin = async (event) => {
    await axios
      .post('http://localhost:5000/api/login', { username, password })
      .then((res) => {
        const { token } = res.data
        // event.preventDefault()
        localStorage.setItem('token,', token)
        localStorage.setItem('username,', username)
        localStorage.setItem('password,', password)
        // Aqui pode salvar o token no localstorage
        navigate('/logado')
        setLoggedIn(true)
        // console.log('Você logou.')
        console.log('Token JWT:', token)
      })
      .catch((err) => {
        console.log('Erro ao realizar o login:', err)
        throw err
      })
  }

  return (
    <div>
      <div className="container">
        <div className="forms">
          <div className="form login">
            <span className="title">Login</span>
            <form action="#">
              <div className="input-field">
                <input
                  value={username}
                  type="text"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setUsename(e.target.value)}
                />
                <FontAwesomeIcon className="i" icon={faEnvelope} size="sm" />
              </div>
              <div className="input-field">
                <input
                  value={password}
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
                <FontAwesomeIcon className="i" icon={faLock} />
                <i className="uil uil-lock icon"></i>
                <i className="uil uil-eye-slash showHidePw"></i>
              </div>
              <div>
                <label htmlFor="logCheck" className="text">
                  Remember me
                </label>
              </div>
              <a href="#" className="text">
                Forgot password?
              </a>
              <div className="input-field button">
                <input type="button" value="Login" onClick={handleLogin} />
              </div>
            </form>
            <div className="login-signup">
              <span className="text">
                Not a member?
                <a href="/register" className="text signup-link">
                  Signup Now
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
