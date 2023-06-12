const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();
const app = require('../index');

chai.use(chaiHttp);

describe('Router Test', () => {
  it('should return the list of users on GET / (success)', (done) => {
    chai.request(app)
      .get('/users')
      .end((err, res) => {
        res.should.have.status(200);
        res.should.be.json;
        done();
      });
  });
});