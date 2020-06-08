import { getRandomInt, generateProgression } from '../util.js';

const gameRules = ('What number is missing in the progression?');

const progressionLength = 10;

const generateOptions = () => {
  const progression = generateProgression(progressionLength);
  const unknownIndex = getRandomInt(0, progressionLength - 1);

  const question = progression.map((current, index) => ((index === unknownIndex) ? '..' : current));

  const answer = `${progression[unknownIndex]}`;

  return { question, answer };
};

export { gameRules, generateOptions };
