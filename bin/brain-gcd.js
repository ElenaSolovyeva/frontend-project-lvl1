#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { gameRules, generateQuestion, getRightAnswer } from '../games/brain-gcd-features.js';

playWithUser(gameRules, generateQuestion, getRightAnswer);
