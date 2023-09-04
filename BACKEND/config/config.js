require('dotenv').config()

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
    password: 'null',
    database: 'database_test',
    host: 'localhost',
    dialect: 'mysql'
  },
  production: {
    username: 'root',
    password: 'null',
    database: 'databse_production',
    host: 'localhost',
    dialect: 'mysql'
  }
};
