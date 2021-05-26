// Schema Import
import getDecimalNumbersSchema from '../../schemas/getDecimalNumbers.schema';
// Use cases Import
import makeGetDecimalNumbers from './getDecimalNumbers';
// Utils Import
import randomInteger from '../../utils/random.utils';

/* use cases definitions */
const getDecimalNumbers = makeGetDecimalNumbers({
  getDecimalNumbersSchema,
  randomInteger,
});

export default getDecimalNumbers;
