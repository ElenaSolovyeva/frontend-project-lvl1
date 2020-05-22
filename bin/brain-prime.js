#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { printRules, generateQuestion, getRightAnswer } from '../games/brain-prime-features.js';

playWithUser(printRules, generateQuestion, getRightAnswer);
