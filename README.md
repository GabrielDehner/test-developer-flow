# Backend
_Api que permite obtener la ubicación, el clima actual y en 5 días._

### Pre-requisitos 📋
_Poseer un entorno de node para ejecutar el proyecto._

_Asegurar que existe el archivo .env dentro del directorio Backend. De lo contrario completarlo/modificarlo de la siguiente manera o equivalente._
```
PORT=5000
VERSION=v1
HOST=localhost
BASE_URL_IP_API=http://ip-api.com/
ADDITIONAL_URL_IP_API=json
BASE_URL_WEATHER=http://api.openweathermap.org/data/2.5/
WEATHER_CURRENT=weather
WEATHER_FORECAST=forecast
WEATHER_APPID=013ccb893b8a18bd7d03d83f387e6d78
UNITS=metric
LANG=es
```

### Ejecución
_Dentro del directorio Backend utilizar los siguientes comandos de ejecución._
* **npm i** - *Descarga los módulos necesarios.*
* **npm test** - *Ejecuta las pruebas dentro del directorio "test". Cabe mencionar que se realizaron pruebas utilizando Supertest y Chai junto con Mocha.*
* **export $(cat .env | xargs) && npm start** - *Genera las variables de entorno e inicia el proyecto compilado.*


# Frontend
_App que permite visualizar el pronóstico climático actual y de los próximos 5 días en la ubicación actual y en otras 5 ciudades seleccionables._

### Pre-requisitos 📋
_Poseer un entorno de node y el cli de angular para ejecutar el proyecto_

_Asegurar que el archivo ./Frontend/src/environment/environment.ts posea lo siguiente o equivalente._
```
export const environment = {
  production: false,
  urlApiWeather:"http://localhost:5000/v1/",
  urlWeatherIcon:"http://openweathermap.org/img/wn/"
};
```

### Ejecución
_Dentro del directorio Frontend utilizar los siguientes comandos de ejecución._
* **npm i** - *Descarga los módulos necesarios.*
* **ng serve** - *Inicia el proceso en el puerto 4200 por defecto.*