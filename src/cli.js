export const startDialog = () => {
  let readlineSync = require('readline-sync');

  let userName = readlineSync.question('May I have your name, dear? ');
  console.log('Hi' + userName + ':))');

}
