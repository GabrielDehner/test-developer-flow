let chai = require('chai');
let chaiHttp = require('chai-http');
const expect = require('chai').expect;

chai.use(chaiHttp);
const url = process.env.HOST + ":" + process.env.PORT + "/" + process.env.VERSION;
describe('Chai - Obtener ip y ubicación actual: ', () => {
    it('Debe responder un json con los datos de ubicacion e ip, o bien data en null', (done) => {
        chai.request(url)
            .get('/location')
            .end(function(err, res) {
                console.log(res.body)
                expect(res).to.have.status(200);
                done();
            });
    });
});