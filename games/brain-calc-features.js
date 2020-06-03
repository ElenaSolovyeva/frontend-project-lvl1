import { getRandomInt } from './util.js';

const operators = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

const generateOptions = () => {
  const firstRandomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const randomOperator = operators[getRandomInt(0, operators.length)];

  switch (randomOperator) {
    case ('+'):
      return {
        question: `${firstRandomNumber} + ${secondRandomNumber}`,
        answer: (firstRandomNumber + secondRandomNumber).toString(),
      };
    case ('-'):
      return {
        question: `${firstRandomNumber} - ${secondRandomNumber}`,
        answer: (firstRandomNumber - secondRandomNumber).toString(),
      };
    case ('*'):
      return {
        question: `${firstRandomNumber} * ${secondRandomNumber}`,
        answer: (firstRandomNumber * secondRandomNumber).toString(),
      };
    default:
      return ('Error: operator is undefined');
  }
};

export { gameRules, generateOptions };
