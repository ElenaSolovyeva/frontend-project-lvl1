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
  const maxDivisor = Math.floor(Math.sqrt(num));
  for (let divisor = 2; divisor <= maxDivisor; divisor += 1) {
    if (num % divisor === 0) {
      return false;
    }
  }
  return true;
};

export {
  getRandomInt, isEven, findGCD, isPrime,
};
