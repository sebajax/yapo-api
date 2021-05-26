export default function makeGetDecimalNumbers({
  getDecimalNumbersSchema,
  randomInteger,
}) {
  return async function getDecimalNumbers({ number }) {
    // Service schema to validate from params
    const getDecimalNumbersService = {
      number,
    };
    // Schema validation
    const { error } = getDecimalNumbersSchema.validate(
      getDecimalNumbersService,
    );
    if (error) {
      return { error: true, data: error.details[0].message };
    }

    // calculate random number
    const minNumber = number / 2; // min number to random
    const maxNumber = number + 1; // max number to random
    const randomNumber = randomInteger({ minNumber, maxNumber });

    // get decimals from from pi with calculated random number
    const pi = Math.PI.toFixed(randomNumber);

    return {
      error: false,
      data: {
        random_number: randomNumber,
        pi,
      },
    };
  };
}
