const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const { Sequelize } = require('sequelize'); // Importe o Sequelize
const config = require('./config/config'); // Importe as configurações

const app = express();

app.use(cors());
app.use(bodyParser.json());

const sequelize = new Sequelize(config.development);

require('dotenv').config(); // Importe e configure o dotenv
// Teste a conexão com o banco de dados

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexão com o banco de dados estabelecida com sucesso.');
  })
  .catch(err => {
    console.error('Erro na conexão com o banco de dados:', err);
  });
app.use('/api', apiRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
