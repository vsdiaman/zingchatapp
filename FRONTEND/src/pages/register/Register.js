import React, { useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'
import './css/styles.css'

function Register() {
  const [formData, setFormData] = useState({
    nome: '',
    username: '',
    email: '',
    senha: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar lógica para lidar com o envio do formulário
    try {
      const response = axios.post('/usuarios/cadastrar', formData)
      console.log(response.data) // Recebe a resposta do servidor
    } catch (error) {
      console.error(error)
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
                value={formData.nome}
                type="text"
                name="nome"
                placeholder="Enter your name"
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
                value={formData.senha}
                type="password"
                name="senha"
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
