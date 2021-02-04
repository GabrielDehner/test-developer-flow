const request = require('supertest');
const app = require('../index');
const version = process.env.VERSION;
describe('Supertest - Obtener clima de hoy:', function() {
    it('Debe responder un json con los datos devueltos por la API Weather para la ciudad actual.', function(done) {
        request(app)
            .get('/' + version + '/current')
            .expect(200, done);
    });
    it('Debe responder un json con los datos devueltos por la API Weather para Posadas.', (done) => {
        request(app)
            .get('/' + version + '/current/Posadas')
            .expect(200, done);
    });
    it('Debe responder un json con un mensaje dentro de data que describa que no se encontro el clima para esa city.', (done) => {
        request(app)
            .get('/' + version + '/current/noexiste')
            .expect(200, done);
    });
});