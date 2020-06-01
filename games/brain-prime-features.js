import { getRandomInt, isPrime } from './util.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';


const generateOptions = () => {
  const result = {};

  result.question = getRandomInt(0, 100);

  const writeBooleanAnswer = isPrime(result.question);

  switch (writeBooleanAnswer) {
    case (true):
      result.answer = 'yes';
      break;
    default:
      result.answer = 'no';
  }

  return result;
};


export { gameRules, generateOptions };
