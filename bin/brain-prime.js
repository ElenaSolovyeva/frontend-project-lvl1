#!/usr/bin/env node

import playWithUser from '../games/index.js';

import { gameRules, generateOptions } from '../games/brain-prime-features.js';

playWithUser(gameRules, generateOptions);
