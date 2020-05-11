import readlineSync from 'readline-sync';

const startDialog = () => {
  const userName = readlineSync.question('May I have your name,  my dear? ');
  console.log(`Hi, ${userName}`);
};

export default startDialog;
