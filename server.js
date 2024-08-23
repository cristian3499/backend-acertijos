const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const gameRoutes = require('./routes/gameRoutes'); // Asegúrate de tener este archivo en la carpeta correcta

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
mongoose.connect('mongodb+srv://soportetecnico3499:QlmQc4bvfyUlDocO@cluster0.nwp5l.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected...'))
.catch(err => console.log(err));

// Usa las rutas del juego
app.use('/api/game', gameRoutes);  // Este es el endpoint base para las rutas del juego

// Modelo para las respuestas (Puedes eliminar esta sección si ya estás usando 'GameSession' desde el controlador)
const Response = mongoose.model('Response', new mongoose.Schema({
    step: String,
    result: String
}));

// Endpoint para guardar respuestas (Esto se puede eliminar si estás usando las nuevas rutas)
app.post('/api/responses', async (req, res) => {
    const { step, result } = req.body;
    const newResponse = new Response({ step, result });
    await newResponse.save();
    res.send('Response saved');
});

// Escuchar en un puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
