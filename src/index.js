import readlineSync from 'readline-sync';

const requestUserName = () => {
  const userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
  return userName;
};

const playWithUser = (gameDescription, generateRound) => {
  let userAnswer;
  const attemptsNumber = 3;

  console.log('Welcome to the Brain Games!');
  const userName = requestUserName();
  console.log(gameDescription);

  for (let i = 1; i <= attemptsNumber; i += 1) {
    const gameOptions = generateRound();
    console.log(`Question: ${gameOptions.question}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameOptions.answer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${gameOptions.answer}"
Let's try again, ${userName}!`);
      return;
      // https://eslint.org/docs/rules/consistent-return
      // This rule requires return statements to either always or never specify values.
      // Если здесь ничего не возвращаем, то и в 42й строке тоже ничего не надо возвращать
      // (return не нужен).
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playWithUser;

export { requestUserName };
