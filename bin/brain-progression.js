#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameDescription, generateRound } from '../src/games/brain-progression-game.js';

playWithUser(gameDescription, generateRound);
