const WRONG_TYPE = 'WRONG_TYPE'; // wrong datatype
const WRONG_DATE = 'WRONG_DATE'; // wrong date
const EMPTY = 'EMPTY'; // cannot be empty
const MIN_STRING = 'MIN_STRING'; // falls under the number of allowed characters
const MAX_STRING = 'MAX_STRING'; // exceeds the number of allowed characters
const LOWERCASE_STRING = 'LOWERCASE_STRING'; // string not in lowercase
const MIN_NUMBER = 'MIN_NUMBER'; // is less than the allowed minimum number
const MAX_NUMBER = 'MAX_NUMBER'; // is greater than the allowed maximum number
const MIN_DATE = 'MIN_DATE'; // is less than the selected start date
const REQUIRED = 'REQUIRED'; // is required
const ALPHANUM = 'ALPHANUM'; // must be alphanum
const ARRAY_BODY_ERROR = 'ARRAY_BODY_ERROR'; // Array incorrect body
const OBJECT_BODY_ERROR = 'OBJECT_BODY_ERROR'; // Object incorrect attributes

const errorString = {
  'string.base': `[{#key}] ${WRONG_TYPE}`,
  'string.empty': `[{#key}] ${EMPTY}`,
  'string.min': `[{#key}] ${MIN_STRING} = 1`,
  'string.max': `[{#key}] ${MAX_STRING} = 99`,
  'string.alphanum': `[{#key}] ${ALPHANUM}`,
  'string.lowercase': `[{#key}] ${LOWERCASE_STRING}`,
  'any.required': `[{#key}] ${REQUIRED}`,
};

const errorNumber = {
  'number.base': `[{#key}] ${WRONG_TYPE}`,
  'number.empty': `[{#key}] ${EMPTY}`,
  'number.min': `[{#key}] ${MIN_NUMBER}`,
  'number.max': `[{#key}] ${MAX_NUMBER}`,
  'any.required': `[{#key}] ${REQUIRED}`,
};

const errorDate = {
  'date.base': `[{#key}] ${WRONG_TYPE}`,
  'date.min': `[{#key}] ${MIN_DATE}`,
  'date.format': `[{#key}] ${WRONG_DATE}`,
  'any.required': `[{#key}] ${REQUIRED}`,
};

const errorArray = {
  'array.base': `${ARRAY_BODY_ERROR}`,
  'array.min': `${ARRAY_BODY_ERROR}`,
  'any.required': `${ARRAY_BODY_ERROR}`,
};

const errorObject = {
  'object.base': `${OBJECT_BODY_ERROR}`,
  'object.unknown': `${OBJECT_BODY_ERROR}`,
  'any.required': `${OBJECT_BODY_ERROR}`,
};

const Messages = Object.freeze({
  errorString,
  errorNumber,
  errorDate,
  errorArray,
  errorObject,
});

export default Messages;
export { errorString, errorNumber, errorDate, errorArray, errorObject };
