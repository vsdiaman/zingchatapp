// controllers/authController.js
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const crypto = require('crypto'); // Importe o módulo crypto

function generateRadomToken(length) {
    return crypto.randomBytes(length).toString('hex')
  }

const secretKey = generateRadomToken(32)

module.exports = {
  async login(req, res) {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({
        where: { username, password },
      });

      if (!user) {
        return res.status(401).json({ message: 'Credenciais inválidas!' });
      }

      const token = jwt.sign({ userId: user.id }, secretKey);

      return res.json({ message: 'Login bem-sucedido!', token });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ message: 'Erro interno no servidor.' });
    }
  },

  // Adicione outras funções do controlador aqui
};
