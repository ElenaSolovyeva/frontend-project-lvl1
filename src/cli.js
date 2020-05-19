import readlineSync from 'readline-sync';

let userName;

const startDialog = () => {
  userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
};

const map = {
  yes: true,
  no: false,
};

const isEven = (number) => (number % 2 === 0);

const checkAnswer = (number, answer) => ((isEven(number) && answer)
  || (!isEven(number) && !answer));

const getRightAnswer = (number) => {
  const writeBooleanAnswer = isEven(number);
  // console.log(`number = ${number}, writeBooleanAnswer = ${writeBooleanAnswer}`); // для отладки
  // Находим в map ключ по значению и возвращаем его
  const keys = Object.keys(map);
  const value = keys.find((key) => (map[key] === writeBooleanAnswer));
  return value;
};

const generateFeedbackByMistake = (result, userAnswer, number) => {
  console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${getRightAnswer(number)}"`);
  console.log(`Let's try again, ${userName}!`);
};

// У игрока n попыток
const playWithUser = (n) => {
  let result = true;
  let userAnswer;

  for (let i = 1; i <= n; i += 1) {
    // 1. Генерируем случайное число (в условии диапазон не задан)
    const number = Math.floor(100 * Math.random());
    // 2. Выводим в консоль вопрос со случайным числом
    console.log(`Question: ${number}`);
    // 3. Считываем ответ пользователя в переменную usreAnswer
    userAnswer = readlineSync.question('Your answer: ');

    // 4. Переводим ответ пользователя в тип boolean с помощью map
    const booleanAnswer = map[userAnswer];
    if (booleanAnswer === undefined) {
      // Выводим результат проверки в консоль и прерываем игру
      return generateFeedbackByMistake(result, userAnswer, number);
    }

    // 5. Проверяем ответ пользователя (приведенный к типу boolean)
    result = checkAnswer(number, booleanAnswer);
    if (!result) {
      // Выводим результат проверки в консоль и прерываем игру
      return generateFeedbackByMistake(result, userAnswer, number);
    }
    console.log('Correct!');
  }
  // Выводим в консоль результат при выигрыше
  console.log(`Congratulations, ${userName}!`);
  return result; // Без return линтер ругается, а этот return вроде ничему не мешает
};

export {
  startDialog,
  playWithUser,
};
