// #!/usr/bin/env node

import readlineSync from 'readline-sync';

const startDialog = () => {
  const userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
  return userName;
};

const displayFeedbackByMismatch = (userName, rightAnswer, userAnswer) => {
  console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}"`);
  console.log(`Let's try again, ${userName}!`);
};

const playWithUser = (gameRules, generateOptions) => {
  let userAnswer;
  const attemptsNumber = 3;

  console.log('Welcome to the Brain Games!');
  const userName = startDialog();
  console.log(gameRules);

  for (let i = 1; i <= attemptsNumber; i += 1) {
    const gameOptions = generateOptions();
    console.log(`Question: ${gameOptions.question}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameOptions.answer) {
      return displayFeedbackByMismatch(userName, gameOptions.answer, userAnswer);
    }

    console.log('Correct!');
  }

  // Выводим в консоль результат при выигрыше
  console.log(`Congratulations, ${userName}!`);

  return true; // Без return линтер ругается, а этот return вроде ничему не мешает
};

export default playWithUser;

export { startDialog };
