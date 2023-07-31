const express = require('express')

const jwt = require('jsonwebtoken')

const bodyParser = require('body-parser')

const app = express()

const cors = require('cors')

const crypto = require('crypto')

app.use(bodyParser.json())

app.use(cors())

const PORT = 5000

function generateRadomToken(length) {
  return crypto.randomBytes(length).toString('hex')
}

// Gera um token de 32 caracteres
// Chave secreta para assinar os tokens;
const secretKey = generateRadomToken(32)

// Usuários
const users = [
  { id: 1, username: 'vitor', password: 'senha1' },
  { id: 2, username: 'gabriel', password: 'senha2' },
]
// Rota de login
app.post('/api/login', (req, res) => {
  const { username, password } = req.body

  // Simulação de autenticação em memóriajulia larangeiras
  const user = users.find(
    (user) => user.username === username && user.password === password,
  )
  if (!user) {
    return res.status(401).json({ mesage: 'Credenciais inválidas!' })
  }

  // Cria um token JWT após o login
  const token = jwt.sign({ userId: user.id }, secretKey)

  return res.json({ message: 'Logi!', token })
})

// Rota protegida que requer autenticação
app.get('/api/proteted', (req, res) => {
  // Obtem o token do cabeçalho da requisição
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).json({ message: 'Acesso não autorizado!' })
  }

  // Verifica e decodifica o token
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Acesso não autorizado!' })
    }

    // Token é valido, pode prosseguir para a rota protegidasecretKey
    // Aqui é implementar a lógica para retornar os dados especificos da rota protegida
    return res.json({ message: 'Acesso autorizado, dados protegidos!' })
  })
})

app.get('/', (req, res) => {
  res.send('Hello World usando metodo get!')
})

app.listen(PORT, () => {
  console.log(`Servitor rodando na porta: ${PORT}`)
})
