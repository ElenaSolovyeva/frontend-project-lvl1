#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { gameRules, generateOptions } from '../games/brain-progression-features.js';

playWithUser(gameRules, generateOptions);
