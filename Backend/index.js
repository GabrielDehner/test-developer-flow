const express = require('express');
const app = express();

/**
 * Configuraciones [cors, json]
 */
const cors = require('cors');
app.use(cors());
app.use(express.json());

/**
 * Rutas
 */
app.use('/' + process.env.VERSION || "v1", require('./routes/Weather.route'));

/**
 * Inicio servidor en escucha
 */
var server = app.listen(process.env.PORT || 7000, () => {
    console.log("Escuchando en puerto: " + process.env.PORT || 7000);
})
module.exports = app;