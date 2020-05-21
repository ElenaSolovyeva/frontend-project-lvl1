#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { gameRules, generateQuestion, getRightAnswer } from '../games/brain-even-features.js';

playWithUser(gameRules, generateQuestion, getRightAnswer);