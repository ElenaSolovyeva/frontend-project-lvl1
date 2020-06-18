import getRandomInt from '../util.js';

const operators = ['+', '-', '*'];

const gameRule = 'What is the result of the expression?';

const generateRound = () => {
  const firstRandomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const randomOperator = operators[getRandomInt(0, operators.length)];

  const question = `${firstRandomNumber} ${randomOperator} ${secondRandomNumber}`;

  let answer;

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
      return null;
  }

  return { question, answer: `${answer}` };
};

export { gameRule, generateRound };
