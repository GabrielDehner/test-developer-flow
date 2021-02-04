/**
 * Declaraciones
 * Axios para realizar solicitudes http
 */
var IpApiService = {}
var axios = require('axios');
const urlIpApi = process.env.BASE_URL_IP_API;
const addUrlIpApi = process.env.ADDITIONAL_URL_IP_API;
/**
 * Obtiene la ip y ubicacion mediante solicitud a ip-api. Caso de error retorna valor nulo.
 */
IpApiService.getIpActual = async() => {
    var response = null;
    try {
        response = await axios.get(urlIpApi + addUrlIpApi);
        response = response.data;
    } catch (error) {
        response = null;
    }
    return response;
}

module.exports = IpApiService;