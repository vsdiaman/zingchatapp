import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import './styles.css'
import axios from 'axios'
import { Navigate } from 'react-router-dom'

const Login = () => {
  const [username, setUsename] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  // Envia os dados do fomulário para o servidor via POST

  const handleLogin = () => {
    axios
      .post('http://localhost:5000/api/login', { username, password })
      .then((res) => {
        const { token } = res.data
        // Aqui pode salvar o token no localstorage
        setLoggedIn(true)
        console.log('Você logou.')
        console.log('Token JWT:', token)
      })
      .catch((err) => {
        console.log('Erro ao realizar o login:', err)
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
