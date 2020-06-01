#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { gameRules, generateOptions } from '../games/brain-calc-features.js';

playWithUser(gameRules, generateOptions);
