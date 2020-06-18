import getRandomInt from '../util.js';

const gameDescription = ('What number is missing in the progression?');

const generateRound = () => {
  const first = getRandomInt(1, 6); // пусть 1й член прогрессии будет небольшим числом
  const step = getRandomInt(1, 6); // пусть шаг прогрессии будет небольшим
  const progressionLength = 10;
  const randomIndex = getRandomInt(0, progressionLength - 1);
  const progression = Array.from(Array(progressionLength),
    (item, index) => (first + index * (1 + step)));

  const question = progression.map((current, index) => ((index === randomIndex) ? '..' : current));

  const answer = `${progression[randomIndex]}`;

  return { question, answer };
};

export { gameDescription, generateRound };
