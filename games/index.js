// #!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;
const n = 3; // У игрока n попыток

const startDialog = () => {
  userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
};

const generateFeedbackByMistake = (rightAnswer, userAnswer) => {
  console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}"`);
  console.log(`Let's try again, ${userName}!`);
};


const playWithUser = (printRules, generateQuestion, getRightAnswer) => {
  const result = true;
  let userAnswer;

  console.log('Welcome to the Brain Games!');
  startDialog();
  printRules();

  for (let i = 1; i <= n; i += 1) {
    const question = generateQuestion();
    console.log(`Question: ${question}`);

    userAnswer = readlineSync.question('Your answer: ');

    const rightAnswer = getRightAnswer(question);

    if (userAnswer !== rightAnswer) {
      // Выводим результат проверки в консоль и прерываем игру
      return generateFeedbackByMistake(rightAnswer, userAnswer);
    }
    console.log('Correct!');
  }

  // Выводим в консоль результат при выигрыше
  console.log(`Congratulations, ${userName}!`);
  return result; // Без return линтер ругается, а этот return вроде ничему не мешает
};

export default playWithUser;

export { startDialog };
