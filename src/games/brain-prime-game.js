import playWithUser from '../index.js';
import getRandomInt from '../util.js';

const gameDescription = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }

  const maxDivisor = Math.floor(Math.sqrt(num));
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomInt(0, 100);
  const answer = isPrime(question) ? 'yes' : 'no';
  return { question, answer };
};


const startGame = () => playWithUser(gameDescription, generateRound);

export default startGame;
