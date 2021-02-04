/**
 * Declaraciones
 * Axios para realizar solicitudes http
 */

var WeatherService = {}
var axios = require('axios');
const urlWeather = process.env.BASE_URL_WEATHER;
const current = process.env.WEATHER_CURRENT;
const forecast = process.env.WEATHER_FORECAST;
const appid = process.env.WEATHER_APPID;
const units = process.env.UNITS;
const lang = process.env.LANG;

/**
 * Obtiene el clima de hoy para una ciudad en especifico. Caso de error retorna valor de error.
 */
WeatherService.getCurrent = async(city) => {
    var response = null;
    var params = `?q=${city}&appid=${appid}&units=${units}&lang=${lang}`;
    try {
        response = await axios.get(urlWeather + current + encodeURI(params));
        response = response.data;
    } catch (error) {
        response = {
            error: true,
            message: error.message
        };
    }
    return response;
}

/**
 * Obtiene el clima de 5 dias para una ciudad en especifico. Caso de error retorna valor de error.
 */
WeatherService.getForecast = async(city) => {
    var response = null;
    var params = `?q=${city}&appid=${appid}&units=${units}&lang=${lang}`;
    try {
        response = await axios.get(urlWeather + forecast + encodeURI(params));
        response = response.data;
    } catch (error) {
        response = {
            error: true,
            message: error.message
        };
    }
    return response;
}

module.exports = WeatherService;