let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = process.env.HOST + ":" + process.env.PORT + "/" + process.env.VERSION;
describe('Chai - Obtener clima de 5 días con intervalos de 3 horas: ', () => {
    it('Debe responder un json con los datos devueltos por la API Weather para la ciudad actual.', (done) => {
        chai.request(url)
            .get('/forecast')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Debe responder un json con los datos devueltos por la API Weather para Posadas.', (done) => {
        chai.request(url)
            .get('/forecast/Posadas')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
    it('Debe responder un json con un mensaje dentro de data que describa que no se encontro el clima para esa city.', (done) => {
        chai.request(url)
            .get('/forecast/noexiste')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});