import playWithUser from '../index.js';
import getRandomInt from '../util.js';


const operators = ['+', '-', '*'];

const gameDescription = 'What is the result of the expression?';

const generateRound = () => {
  const firstRandomNumber = getRandomInt(0, 100);
  const secondRandomNumber = getRandomInt(0, 100);
  const randomOperator = operators[getRandomInt(0, operators.length - 1)];

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

const startGame = () => playWithUser(gameDescription, generateRound);

export default startGame;
