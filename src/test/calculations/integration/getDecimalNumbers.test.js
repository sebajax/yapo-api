import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../../../app';

chai.use(chaiHttp);
chai.should();

describe('yapo-api integration testing', () => {
  // TEST #getDecimalNumbers() status 200
  describe('GET /calculations/:number #getDecimalNumbers()', () => {
    it('It should pass the test with status 200 & return an object with the pi & the decimals calculated from random_number', (done) => {
      chai
        .request(app)
        .get('/calculations/10')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          res.body.should.have.property('error').to.eql(false);
          res.body.should.have.property('data');
          res.body.data.should.be.a('object');
          res.body.data.should.have.property('pi');
          done();
        });
    });
  });

  // TEST #getDecimalNumbers() status 400
  describe('GET /calculations/:number #getDecimalNumbers()', () => {
    it('It should NOT pass the test with status 400 & return an object with an error message that the number exceed 99', (done) => {
      chai
        .request(app)
        .get('/calculations/100')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error').to.eql(true);
          res.body.should.have
            .property('data')
            .to.be.a('string')
            .to.eql('[number] MAX_NUMBER = 99');
          done();
        });
    });
  });

  // TEST #getDecimalNumbers() status 400
  describe('GET /calculations/:number #getDecimalNumbers()', () => {
    it('It should NOT pass the test with status 400 & return an object with an error message that the number is lower than 1', (done) => {
      chai
        .request(app)
        .get('/calculations/0')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error').to.eql(true);
          res.body.should.have
            .property('data')
            .to.be.a('string')
            .to.eql('[number] MIN_NUMBER = 1');
          done();
        });
    });
  });

  // TEST #getDecimalNumbers() status 400
  describe('GET /calculations/:number #getDecimalNumbers()', () => {
    it('It should NOT pass the test with status 400 & return an object with an error message that the number has a wrong type', (done) => {
      chai
        .request(app)
        .get('/calculations/a')
        .end((err, res) => {
          res.should.have.status(400);
          res.body.should.be.a('object');
          res.body.should.have.property('error').to.eql(true);
          res.body.should.have
            .property('data')
            .to.be.a('string')
            .to.eql('[number] WRONG_TYPE');
          done();
        });
    });
  });
});
