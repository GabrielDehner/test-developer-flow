const request = require('supertest');
const app = require('../index');
const version = process.env.VERSION;
describe('Supertest - Obtener ip y ubicación actual: ', () => {
    it('Debe responder un json con los datos de ubicacion e ip, o bien data en null', (done) => {
        request(app)
            .get('/' + version + '/location')
            .expect(200, done);
    });
});