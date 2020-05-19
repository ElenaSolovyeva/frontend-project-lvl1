#!/usr/bin/env node

import {
  startDialog,
  playWithUser,
} from '../src/cli.js';


console.log('Welcome to the Brain Games!');
startDialog();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

playWithUser(3);
