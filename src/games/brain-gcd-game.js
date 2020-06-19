import playWithUser from '../index.js';
import getRandomInt from '../util.js';

const gameDescription = 'Find the greatest common divisor of given numbers.';

const findGCD = (first, second) => {
  let result;
  const min = Math.min(first, second);

  for (let i = 0; i < min; i += 1) {
    if (first % (min - i) === 0 && second % (min - i) === 0) {
      result = min - i;
      break;
    }
  }

  return result;
};

const generateRound = () => {
  const firstRandomNumber = Math.abs(getRandomInt(0, 100));
  const secondRandomNumber = Math.abs(getRandomInt(0, 100));
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = `${findGCD(firstRandomNumber, secondRandomNumber)}`;

  return { question, answer };
};


const startGame = () => playWithUser(gameDescription, generateRound);

export default startGame;
