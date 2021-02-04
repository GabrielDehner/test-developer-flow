const request = require('supertest');
const app = require('../index');
const version = process.env.VERSION;
describe('Supertest - Obtener clima de 5 días con intervalos de 3 horas: ', () => {
    it('Debe responder un json con los datos devueltos por la API Weather para la ciudad actual.', (done) => {
        request(app)
            .get('/' + version + '/forecast')
            .expect(200, done);
    });
    it('Debe responder un json con los datos devueltos por la API Weather para Posadas.', (done) => {
        request(app)
            .get('/' + version + '/forecast/Posadas')
            .expect(200, done);
    });
    it('Debe responder un json con un mensaje dentro de data que describa que no se encontro el clima para esa city.', (done) => {
        request(app)
            .get('/' + version + '/forecast/noexiste')
            .expect(200, done);
    });
});