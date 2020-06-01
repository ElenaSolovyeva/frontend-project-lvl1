import { getRandomInt, generateProgression } from './util.js';

const gameRules = ('What number is missing in the progression?');

const progressionLength = 10;

const generateOptions = () => {
  const result = {};

  const progression = generateProgression(progressionLength);
  const unknownIndex = getRandomInt(0, progressionLength - 1);

  const progressionWithUnknownMember = [...progression];
  progressionWithUnknownMember[unknownIndex] = '..';

  result.question = progressionWithUnknownMember;
  result.answer = progression[unknownIndex].toString(10);

  return result;
};

export { gameRules, generateOptions };
