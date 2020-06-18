#!/usr/bin/env node

import playWithUser from '../src/index.js';

import { gameDescription, generateRound } from '../src/games/brain-calc-game.js';

playWithUser(gameDescription, generateRound);
