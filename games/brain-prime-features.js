import { getRandomInt, isPrime } from './util.js';

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no"';


const generateOptions = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';

  return { question, answer };
};


export { gameRules, generateOptions };
