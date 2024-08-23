// models/GameSession.js

const mongoose = require('mongoose');

const gameSessionSchema = new mongoose.Schema({
    steps: {
        stepOne: { type: String, default: "Pendiente" },
        stepTwo: { type: String, default: "Pendiente" },
        stepThree: { type: String, default: "Pendiente" },
        stepFour: { type: String, default: "Pendiente" },
        stepFive: { type: String, default: "Pendiente" }
    },
    completed: { type: Boolean, default: false },
    completionStatus: { type: String, default: "Incompleto" } // 'Incompleto', 'Completado', 'No quiso continuar'
}, {
    timestamps: true  // Añade automáticamente los campos createdAt y updatedAt
});

const GameSession = mongoose.model('GameSession', gameSessionSchema);

module.exports = GameSession;
