const express = require('express');
const jwt = require('jsonwebtoken')
const app = express();
const PORT = 3000;

app.use(express.json())

// Chave secreta para assinar os tokens;
const secretKey = "123456"

// Usuários
const users = [
    {id: 1, username:'vitor', password: 'senha1'},
    {id: 2, username:'gabriel', password: 'senha2'}
];

// Rota de login
app.post('/api/login', (req, res)=> {
    const { username, password} =req.body;
    
    // Simulação de autenticação em memória
    const user = users.find(user => user.username === username && user.password === password);
    if(!user) {
    return res.status(401).json({mesage: "Credenciais inválidas!"});
}

// Cria um token JWT após o login
const token = jwt.sign({userId: user.id}, secretKey);

return res.json({message: "Login com sucesso!", token})
})

// Rota protegida que requer autenticação
app.get('/api/proteted', (req, res)=> {
    // Obtem o token do cabeçalho da requisição
    const token = req.headers.authorization;

    if(!token) {
        return res.status(401).json({ message: "Acesso não autorizado!"})
    }

    // Verifica e decodifica o token
    jwt.verify(token, secretKey, (err, decoded) => {
        if(err) {
            return res.status(401).json({ message: "Acesso não autorizado!"})
        }

        // Token é valido, pode prosseguir para a rota protegida
        // Aqui é implementar a lógica para retornar os dados especificos da rota protegida
        return res.json({ message: "Acesso autorizado, dados protegidos!"})
    })
})

app.get('/',(req, res) => {
    res.send("Hello World usando metodo get!")
})

app.listen(PORT, () => {
    console.log(`Servitor rodando na porta: ${PORT}`)
})