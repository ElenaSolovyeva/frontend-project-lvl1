import { getRandomInt, generateProgression } from './util.js';

const gameRules = ('What number is missing in the progression?');

const progressionLength = 10;

const generateOptions = () => {
  const progression = generateProgression(progressionLength);
  const unknownIndex = getRandomInt(0, progressionLength - 1);

  const question = [...progression];
  question[unknownIndex] = '..';

  const answer = progression[unknownIndex].toString(10);

  return { question, answer };
};

export { gameRules, generateOptions };
