const n = 10; // Количество членов прогрессии

let actuallyProgression = []; // is changed by generateQuestion()
let unknownIndex; // is changed by generateQuestion()

const styles = [
  'font-weight: normal;',
  'font-weight: bold;',
  'font-weight: normal;',
];

const printRules = () => (console.log('%c What number is missing %c in %c the progression?', styles[0], styles[1], styles[2]));

function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateProgression = (progressionLength) => {
  const progression = [];

  const first = getRandomInt(1, 6); // пусть 1й член прогрессии будет небольшим числом
  const step = getRandomInt(1, 6); // пусть шаг прогрессии будет небольшим

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = first + i * step;
  }

  return progression;
};

const generateQuestion = () => {
  unknownIndex = getRandomInt(0, n - 1);
  actuallyProgression = generateProgression(n);

  const progressionWithUnknownMember = [...actuallyProgression];
  progressionWithUnknownMember[unknownIndex] = '..';

  return progressionWithUnknownMember;
};

const getRightAnswer = () => (String(actuallyProgression[unknownIndex]));

export { printRules, generateQuestion, getRightAnswer };
