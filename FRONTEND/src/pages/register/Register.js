import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import './css/styles.css'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const API_URL = 'http://localhost:5000/api'

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    try {
      const response = await axios.post(`${API_URL}/register`, formData)
      if (response.status === 201 || response.status === 200) {
        console.log(`${response.data} Usuário cadastrado com sucesso.`) // Recebe a resposta do servidor
      } else {
        console.log(`${response.statusText} - Erro ao cadastrar o usuário.`) // Recebe a resposta do servidor
      }
    } catch (error) {
      console.error(`Error: ${error.message} - Erro ao cadastrar o usuário.`)
    }
  }

  return (
    <div className="register-container">
      <div className="forms">
        <div className="register-form">
          <span className="register-title">Registration</span>

          <form onSubmit={handleSubmit} action="#">
            <div className="register-input-field">
              <FontAwesomeIcon className="register-i" icon={faUser} />
              <input
                value={formData.name}
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="register-input-field">
              <FontAwesomeIcon className="register-i" icon={faUser} />
              <input
                value={formData.username}
                type="text"
                name="username"
                placeholder="Enter your nickname"
                required
                onChange={handleChange}
              />
            </div>
            <div className="register-input-field">
              <FontAwesomeIcon className="register-i" icon={faEnvelope} />
              <input
                value={formData.email}
                type="email"
                name="email"
                placeholder="Enter your e-mail"
                required
                onChange={handleChange}
              />
            </div>
            <div className="register-input-field">
              <FontAwesomeIcon className="register-i" icon={faLock} />
              <input
                value={formData.password}
                type="password"
                name="password"
                className="password"
                placeholder="Enter your password"
                required
                onChange={handleChange}
              />
            </div>
            <div className="button-container">
              <button className="input-field-button"> Signup </button>
            </div>
          </form>

          <div className="login-signup">
            <span className="text">
              Already have an account?
              <a href="/" className="text signup-link">
                Login Now
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
