let number = null;

const styles = {
  normal: 'color: black',
  pink: 'color: #d14',
  bold: 'font-weight: bold',
};

const printRules = () => (console.log('%cAnswer %c"yes" %cif %cgiven number is prime. Otherwise answer %c"no"',
  styles.normal, styles.pink, styles.bold, styles.normal, styles.pink));

const generateQuestion = () => {
  number = Math.floor(Math.random() * 200);
  return number;
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

const getRightAnswer = () => {
  if (isPrime(number)) {
    return 'yes';
  }
  return 'no';
};

export { printRules, generateQuestion, getRightAnswer };
