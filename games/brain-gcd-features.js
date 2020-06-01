import { getRandomInt, findGCD } from './util.js';

const gameRules = 'Find the greatest common divisor of given numbers.';

const generateOptions = () => {
  const result = {};

  const firstRandomNumber = Math.abs(getRandomInt(0, 100));
  const secondRandomNumber = Math.abs(getRandomInt(0, 100));

  result.question = `${firstRandomNumber} ${secondRandomNumber}`;

  result.answer = findGCD(firstRandomNumber, secondRandomNumber).toString(10);

  return result;
};


export { gameRules, generateOptions };
