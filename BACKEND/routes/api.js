// routes/api.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const User = require('../models/User');

router.post('/login', authController.login);

router.post('/cadastrar', async (req, res) => {
    try {
        const {name, username, email, password} = req.body;
        const user = await User.create({username: username, email: email, password: password})
        res.status(201).json({ message: 'Usuário cadastrado com sucesso.'})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;
