#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameRule, generateRound } from '../src/games/brain-gcd-features.js';

playWithUser(gameRule, generateRound);
