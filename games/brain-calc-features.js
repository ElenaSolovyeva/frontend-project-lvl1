const signes = ['+', '-', '*'];

const gameRules = 'What is the result of the expression?';

function getRandomInt(minimum, maximum) {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
}

const generateQuestion = () => {
  const firstRandomNumber = Math.floor(100 * Math.random());
  const secondRandomNumber = Math.floor(100 * Math.random());
  const randomSign = signes[getRandomInt(0, 2)];
  return `${firstRandomNumber} ${randomSign} ${secondRandomNumber}`;
};


const getRightAnswer = (question) => {
  let result;
  const items = question.split(' ');
  const firstNumber = parseInt(items[0], 10);
  const secondNumber = parseInt(items[2], 10);
  const sign = items[1];

  switch (sign) {
    case ('+'):
      result = firstNumber + secondNumber;
      break;
    case ('-'):
      result = firstNumber - secondNumber;
      break;
    case ('*'):
      result = firstNumber * secondNumber;
      break;
    default:
      console.log('Error: sign is undefined');
  }

  return result.toString(10);
};


export { gameRules, generateQuestion, getRightAnswer };
