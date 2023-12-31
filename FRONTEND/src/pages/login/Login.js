import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
// import { response } from 'express'
import './css/styles.css'

const Login = () => {
  const [username, setUsename] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [webtoken, setWebtoken] = useState('')

  const navigate = useNavigate()
  // Envia os dados do fomulário para o servidor via POST
  const API_URL = 'http://localhost:5000/api'

  const handleLogin = async (event) => {
    event.preventDefault()
    await axios
      .post(`${API_URL}/login`, { email, username, password })
      .then((res) => {
        const { token } = res.data
        // event.preventDefault()
        localStorage.setItem('token', token)
        // localStorage.setItem('username', username)
        localStorage.setItem('username', username)
        localStorage.setItem('email', email)
        localStorage.setItem('password', password)
        // Aqui pode salvar o token no localstorage
        navigate('/logado')
        setLoggedIn(true)
        // console.log('Você logou.')
        console.log('Token JWT:', token)
        console.log('Usuário:', username)
        console.log('Email: ', email)
      })
      .catch((err) => {
        console.log('Erro ao realizar o login:', err)
        throw err
      })
  }

  return (
    <div>
      <div className="login-container">
        <div className="forms">
          <div className="login-formlogin">
            <h1 className="login-title">Welcome</h1>
            <form action="#">
              <div className="input-field">
                <FontAwesomeIcon className="login-i" icon={faEnvelope} />
                <input
                  value={email}
                  type="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-field">
                <FontAwesomeIcon className="login-i" icon={faLock} />
                <label>
                  <input
                    value={password}
                    type="password"
                    className="password"
                    placeholder="Enter your password"
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="login-link-container">
                    <a href="#" className="remember">
                      Remember me
                    </a>
                    <a href="#" className="forgot-password">
                      Forgot password ?
                    </a>
                  </div>
                </label>
              </div>
              <div className="button-container">
                {/* <FontAwesomeIcon className="i" icon={faLock} /> */}
                <button
                  type="button"
                  className="input-field-button"
                  value={Login}
                  onClick={handleLogin}
                >
                  Submit
                </button>
              </div>
              {/* <div className="input-field button">
                <input type="button" value="Login" onClick={handleLogin} />
              </div> */}
            </form>
            <div className="login-signup">
              <span className="text">
                Not a member?
                <a href="/register" className="signup-link">
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
