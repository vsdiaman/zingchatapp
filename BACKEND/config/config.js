require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'mysql'
  },
  test: {
    username: 'root',
    password: '123456789',
    database: 'zingDataBase',
    host: 'localhost',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: '123456789',
    database: 'zingDataBase',
    host: 'localhost',
    dialect: 'mysql'
  }
};

// NOTA
// E AQUI Q ESTA HAVENDO PROBLEMA DE CONECCAO COM O BANCO HOST 127.0.0.1
