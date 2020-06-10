#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameRules, generateRound } from '../src/games/brain-gcd-features.js';

playWithUser(gameRules, generateRound);
