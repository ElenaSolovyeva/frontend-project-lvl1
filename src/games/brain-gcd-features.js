import { getRandomInt, findGCD } from '../util.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateOptions = () => {
  const firstRandomNumber = Math.abs(getRandomInt(0, 100));
  const secondRandomNumber = Math.abs(getRandomInt(0, 100));
  const question = `${firstRandomNumber} ${secondRandomNumber}`;
  const answer = `${findGCD(firstRandomNumber, secondRandomNumber)}`;

  return { question, answer };
};


export { gameRules, generateOptions };
