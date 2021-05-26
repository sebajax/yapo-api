// Dependencies Import
import Joi from 'joi';
// Messages Import
import { errorNumber } from '../config/messages/joi.messages';

const getDecimalNumbers = Joi.object({
  number: Joi.number().strict().required().min(1).max(99).messages(errorNumber), // param
});

export default getDecimalNumbers;
