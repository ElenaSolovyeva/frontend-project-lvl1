#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { printRules, generateQuestion, getRightAnswer } from '../games/brain-progression-features.js';

playWithUser(printRules, generateQuestion, getRightAnswer);
