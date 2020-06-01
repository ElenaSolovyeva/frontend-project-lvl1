import { getRandomInt, isEven } from './util.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';


const generateOptions = () => {
  const result = {};
  result.question = getRandomInt(0, 100);

  const writeBooleanAnswer = isEven(result.question);

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
