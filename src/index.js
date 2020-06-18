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
    const gameRound = generateRound();
    console.log(`Question: ${gameRound.question}`);

    userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== gameRound.answer) {
      console.log(`"${userAnswer}" is a wrong answer ;(. Correct answer was "${gameRound.answer}"
Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playWithUser;

export { requestUserName };
