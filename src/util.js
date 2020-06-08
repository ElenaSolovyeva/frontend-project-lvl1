const getRandomInt = (minimum, maximum) => {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min)) + min;
};

const isEven = (number) => (number % 2 === 0);

const findGCD = (first, second) => {
  let result;
  const min = Math.min(first, second);

  for (let i = 0; i < min; i += 1) {
    if (first % (min - i) === 0 && second % (min - i) === 0) {
      result = min - i;
      break;
    }
  }

  return result;
};

const isPrime = (num) => {
  const maxDevider = Math.floor(Math.sqrt(num));
  for (let devider = 2; devider <= maxDevider; devider += 1) {
    if (num % devider === 0) {
      return false;
    }
  }
  return true;
};

const generateProgression = (progressionLength) => {
  const progression = [];

  const first = getRandomInt(1, 6); // пусть 1й член прогрессии будет небольшим числом
  const step = getRandomInt(1, 6); // пусть шаг прогрессии будет небольшим

  for (let i = 0; i < progressionLength; i += 1) {
    progression[i] = first + i * step;
  }

  return progression;
};

export {
  getRandomInt, isEven, findGCD, isPrime, generateProgression,
};
