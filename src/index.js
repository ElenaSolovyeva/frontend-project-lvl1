#!/usr/bin/env node

import readlineSync from 'readline-sync';

const startDialog = () => {
  const userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
  return userName;
};

const onWin = (userName) => console.log(`Congratulations, ${userName}!`);

const displayFeedbackOnError = (userName, rightAnswer, userAnswer) => console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${rightAnswer}"
Let's try again, ${userName}!`);

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
      return displayFeedbackOnError(userName, gameOptions.answer, userAnswer);
      // return здесь нужен, чтобы прервать выполнение функции
      // и не выводить `Congratulations, ${userName}!`
    }

    console.log('Correct!');
  }

  // Выводим в консоль результат при выигрыше
  return onWin(userName);
};

export default playWithUser;

export { startDialog };
