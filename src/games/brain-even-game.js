import playWithUser from '../index.js';
import getRandomInt from '../util.js';

const gameDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateRound = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';
  return { question, answer };
};

const startGame = () => playWithUser(gameDescription, generateRound);

export default startGame;
