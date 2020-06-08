#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameRules, generateOptions } from '../src/games/brain-gcd-features.js';

playWithUser(gameRules, generateOptions);
