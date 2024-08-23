// routes/gameRoutes.js

const express = require('express');
const router = express.Router();
const gameController = require('../controllers/gameController');

// Endpoint para crear una nueva sesión de juego cada vez que se reciban datos
router.post('/session/create', gameController.createGameSession);

module.exports = router;
