// Module Imports
import chai, { expect } from 'chai';
import makeGetDecimalNumbers from '../../../services/calculations/getDecimalNumbers';
import getDecimalNumbersSchema from '../../../schemas/getDecimalNumbers.schema';
import randomInteger from '../../../utils/random.utils';

chai.expect();

// TEST #getDecimalNumbers()
describe('#getDecimalNumbers()', () => {
  it('It should pass and return an object with the pi & the decimals calculated from random_number', async () => {
    const getDecimalNumbers = makeGetDecimalNumbers({
      getDecimalNumbersSchema,
      randomInteger,
    });
    const number = 10;
    const response = await getDecimalNumbers({ number });
    expect(response).to.be.a('object');
    expect(response).to.have.property('error');
    expect(response).to.have.property('data');
    expect(response.error).to.eql(false);
    expect(response.data).to.be.a('object');
    expect(response.data).to.have.property('pi');
    expect(response.data).to.have.property('random_number');
  });

  it('It should NOT pass the test and return an object with an error message that the number exceed 99', async () => {
    const getDecimalNumbers = makeGetDecimalNumbers({
      getDecimalNumbersSchema,
      randomInteger,
    });
    const number = 100;
    const response = await getDecimalNumbers({ number });
    expect(response).to.be.a('object');
    expect(response).to.have.property('error');
    expect(response).to.have.property('data');
    expect(response.error).to.eql(true);
    expect(response.data).to.be.a('string').to.eql('[number] MAX_NUMBER = 99');
  });

  it('It should NOT pass the test and return an object with an error message that the number is lower than 1', async () => {
    const getDecimalNumbers = makeGetDecimalNumbers({
      getDecimalNumbersSchema,
      randomInteger,
    });
    const number = 0;
    const response = await getDecimalNumbers({ number });
    expect(response).to.be.a('object');
    expect(response).to.have.property('error');
    expect(response).to.have.property('data');
    expect(response.error).to.eql(true);
    expect(response.data).to.be.a('string').to.eql('[number] MIN_NUMBER = 1');
  });

  it('It should NOT pass the test and return an object with an error message that the number has a wrong type', async () => {
    const getDecimalNumbers = makeGetDecimalNumbers({
      getDecimalNumbersSchema,
      randomInteger,
    });
    const number = 'a';
    const response = await getDecimalNumbers({ number });
    expect(response).to.be.a('object');
    expect(response).to.have.property('error');
    expect(response).to.have.property('data');
    expect(response.error).to.eql(true);
    expect(response.data).to.be.a('string').to.eql('[number] WRONG_TYPE');
  });
});
