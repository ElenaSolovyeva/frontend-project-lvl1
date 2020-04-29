import readlineSync from 'readline-sync';
export const startDialog = () => {
  let userName = readlineSync.question('May I have your name,  my dear? ');
  console.log('Hi' + userName + ':))');

}
