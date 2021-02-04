const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/Weather.controller');


/**
 * Obtener Ubicacion e ip
 */
router.get('/location', weatherController.location);
/**
 * Obtener clima segun la ciudad ingresada o la ciudad actual
 */
router.get('/current/:city?', weatherController.current);
/**
 * Obtener clima de 5 dias (cada 3 horas) segun la ciudad ingresada o la ciudad actual
 */
router.get('/forecast/:city?', weatherController.forecast);

module.exports = router;