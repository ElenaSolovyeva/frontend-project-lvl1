#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { printRules, generateQuestion, getRightAnswer } from '../games/brain-calc-features.js';

playWithUser(printRules, generateQuestion, getRightAnswer);
