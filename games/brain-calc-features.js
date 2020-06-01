import { getRandomInt } from './util.js';

const operators = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const generateOptions = () => {
  let answer;
  const result = {};

  const firstRandomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const randomOperator = operators[getRandomInt(0, operators.length)];

  result.question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  switch (randomOperator) {
    case ('+'):
      answer = firstRandomNumber + secondRandomNumber;
      break;
    case ('-'):
      answer = firstRandomNumber - secondRandomNumber;
      break;
    case ('*'):
      answer = firstRandomNumber * secondRandomNumber;
      break;
    default:
      console.log('Error: operator is undefined');
  }

  result.answer = answer.toString();

  return result;
};


export { gameRules, generateOptions };
