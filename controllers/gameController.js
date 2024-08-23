// controllers/gameController.js

const GameSession = require('../models/GameSession');

// Función para crear una nueva entrada de sesión de juego cada vez que se reciban datos
exports.createGameSession = async (req, res) => {
    const { steps } = req.body;  // Recibe un objeto con los resultados de todos los pasos necesarios

    try {
        // Crear una nueva sesión con los datos proporcionados
        const newSession = new GameSession({
            steps: steps,
            completed: steps.stepTwo === 'No Aceptó' || Object.values(steps).every(status => status === 'Aceptó'), // Evaluar si la sesión debe marcarse como completada
            completionStatus: steps.stepTwo === 'No Aceptó' ? "No quiso continuar" : Object.values(steps).every(status => status === 'Aceptó') ? "Completado" : "Incompleto"
        });

        await newSession.save();
        res.json(newSession);
    } catch (error) {
        res.status(500).send("Error en el servidor: " + error.message);
    }
};
