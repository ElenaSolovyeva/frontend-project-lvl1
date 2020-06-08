import { getRandomInt, isEven } from '../util.js';

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const generateOptions = () => {
  const question = getRandomInt(0, 100);
  const answer = isEven(question) ? 'yes' : 'no';

  return { question, answer };
};


export { gameRules, generateOptions };
