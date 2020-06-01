// #!/usr/bin/env node

import readlineSync from 'readline-sync';

let userName;

const startDialog = () => {
  userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
};

const displayFeedbackByMismatch = (rightAnswer, userAnswer) => {
  console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}"`);
  console.log(`Let's try again, ${userName}!`);
};

const playWithUser = (gameRules, generateOptions) => {
  let userAnswer;
  const attemptsNumber = 3;

  console.log('Welcome to the Brain Games!');
  startDialog();
  console.log(gameRules);

  for (let i = 1; i <= attemptsNumber; i += 1) {
    const gameOptions = generateOptions();
    console.log(`Question: ${gameOptions.question}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameOptions.answer) {
      return displayFeedbackByMismatch(gameOptions.answer, userAnswer);
    }

    console.log('Correct!');
  }

  // Выводим в консоль результат при выигрыше
  console.log(`Congratulations, ${userName}!`);

  return true; // Без return линтер ругается, а этот return вроде ничему не мешает
};

export default playWithUser;

export { startDialog };
