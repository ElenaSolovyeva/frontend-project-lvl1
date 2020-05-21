const map = {
  yes: true,
  no: false,
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => (number % 2 === 0);

const generateQuestion = () => Math.floor(100 * Math.random());

const getRightAnswer = (question) => {
  const writeBooleanAnswer = isEven(question);

  // Находим в map ключ по значению и возвращаем его
  const keys = Object.keys(map);
  const value = keys.find((key) => (map[key] === writeBooleanAnswer));
  return value;
};


export { gameRules, generateQuestion, getRightAnswer };
