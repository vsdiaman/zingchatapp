import React, { Component } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

import './css/styles.css'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      confirmPassword: '',
      email: '',
      message: '',
    }
  }

  handleInputChange = (event) => {
    const { name, value } = event.target
    this.state({ [name]: value })
  }

  handleSubmit = (event) => {
    event.preventDefault() // é um método de complemento que pode ser usado para previnir a ação padrão do evento que estiver acontecendo.
    // const { username, password } = this.state;
    // enviar os dados para um servidor para autenticação
    // atualizar o estado "message" com base na resposta do servidor
    // Implemente aqui a lógica de envio dos dados do formulário para o servidor
  }

  render() {
    const { username, name, password, confirmPassword, email, message } =
      this.state
    return (
      <div className="register-container">
        <div className="forms">
          <div className="register-form">
            <span className="register-title">Registration</span>

            <form onSubmit={this.handleSubmit} action="#">
              <div className="register-input-field">
                <FontAwesomeIcon className="register-i" icon={faUser} />
                <input
                  value={name}
                  type="text"
                  placeholder="Enter your name"
                  required
                ></input>
              </div>
              <div className="register-input-field">
                <FontAwesomeIcon className="register-i" icon={faEnvelope} />
                <input
                  value={email}
                  type="text"
                  placeholder="Enter your e-mail"
                  required
                ></input>
              </div>
              <div className="register-input-field">
                <FontAwesomeIcon className="register-i" icon={faLock} />
                <input
                  value={password}
                  type="password"
                  className="password"
                  placeholder="Enter your password"
                  required
                ></input>
              </div>
              <div className="button-container">
                {/* <FontAwesomeIcon className="i" icon={faLock} /> */}
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
}

export default Register
