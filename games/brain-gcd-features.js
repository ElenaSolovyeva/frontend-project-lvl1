let numbers = [];

const gameRules = 'Find the greatest common divisor of given numbers.';

const printRules = () => (console.log(gameRules));

const generateQuestion = () => {
  // Обнуляем массив с числами перед тем, как сгенерировать новый вопрос
  numbers = [];

  const firstRandomNumber = Math.floor(100 * Math.random()) + 1;
  numbers.push(firstRandomNumber);
  const secondRandomNumber = Math.floor(100 * Math.random()) + 1;
  numbers.push(secondRandomNumber);

  return `${firstRandomNumber} ${secondRandomNumber}`;
};

const findGCD = (items) => {
  let result;

  let [first, second] = items;
  first = parseInt(first, 10);
  first = Math.abs(first);
  second = parseInt(second, 10);
  second = Math.abs(second);
  const min = Math.min(Math.abs(first), Math.abs(second));

  for (let i = 0; i < min; i += 1) {
    if (first % (min - i) === 0 && second % (min - i) === 0) {
      result = min - i;
      break;
    }
  }
  return result.toString(10);
};

const getRightAnswer = () => (findGCD(numbers));

export { printRules, generateQuestion, getRightAnswer };
