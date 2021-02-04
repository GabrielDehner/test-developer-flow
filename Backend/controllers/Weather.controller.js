/**
 * Declaraciones
 * Response, para formateo de respuesta
 * ApiIpService y WeatherService para solicitar funcionalidades a services.
 */
var WeatherController = {};
var Response = require('../models/Response.model');
var ApiIpService = require('../services/IpApi.service');
var WeatherService = require('../services/Weather.service');

/**
 * Obtener Ubicacion e ip
 */
WeatherController.location = async(req, res) => {
    var ipActual = await ApiIpService.getIpActual();
    if (ipActual) {
        res.status(200).send(
            new Response(
                true, ipActual, "Solicitud Procesada Correctamente."
            )
        )
    } else {
        res.status(200).send(
            new Response(
                false, null, "No se pudo obtener la ip actual."
            )
        )
    }
}

/**
 * Obtener clima segun la ciudad ingresada o la ciudad actual
 */
WeatherController.current = async(req, res) => {
    var city = req.params.city;
    var current;
    if (city) {
        current = await WeatherService.getCurrent(city);
    } else {
        var ipActual = await ApiIpService.getIpActual();
        if (ipActual) { //Solo si se obtiene la ciudad se busca el clima, caso contrario devolvera null.
            current = await WeatherService.getCurrent(ipActual.city);
        }
    }
    res.status(200).send(
        new Response(
            true, current, "Respuesta procesada correctamente."
        )
    )
}

/**
 * Obtener clima de 5 dias (cada 3 horas) segun la ciudad ingresada o la ciudad actual
 */
WeatherController.forecast = async(req, res) => {
    var city = req.params.city;
    var forecast;
    if (city) {
        forecast = await WeatherService.getForecast(city);
    } else { //si no ingreso la ciudad se busca la actual
        var ipActual = await ApiIpService.getIpActual();
        if (ipActual) { //Solo si se obtiene la ciudad se busca el clima, caso contrario devolvera null.
            forecast = await WeatherService.getForecast(ipActual.city);
        }
    }
    res.status(200).send(
        new Response(
            true, forecast, 200, "Respuesta procesada correctamente."
        )
    )
}

module.exports = WeatherController;