#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameRule, generateRound } from '../src/games/brain-progression-features.js';

playWithUser(gameRule, generateRound);
