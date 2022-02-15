#!/usr/bin/env node
import getAnswer from '../src/cli.js';
import gameEven from '../games/brain-even.js';
import gameCalc from '../games/brain-calc.js';
import gameGcd from '../games/brain-gcd.js';
import gameProgression from '../games/brain-progression.js';
import gamePrime from '../games/brain-prime.js';

const games = [
  { name: 'Brain Even', callback: gameEven },
  { name: 'Brain Calc', callback: gameCalc },
  { name: 'Brain GCD', callback: gameGcd },
  { name: 'Brain Progression', callback: gameProgression },
  { name: 'Brain Prime', callback: gamePrime },
];

games.forEach(({ name }, index) => console.log(`${+index + 1}] ${name}`));

try {
  const select = +getAnswer('Choose the game:') - 1;
  const { callback } = games[select];
  console.log('#'.repeat(20));
  callback();
} catch (e) {
  console.error(e);
  console.error('Game not found');
}
