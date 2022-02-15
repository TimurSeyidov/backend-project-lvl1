#!/usr/bin/env node
import { Game, getNumber } from '../src/index.js';

const game = new Game('Answer "yes" if the number is even, otherwise answer "no".');
game.setShowTryAgain(false);
game.setQuestion(() => {
  const number = getNumber(100);
  return [number, number % 2 ? 'no' : 'yes'];
});
game.setWrong((answer, userAnswer) => {
  console.log(`Answer "${userAnswer}" if the number is even, otherwise answer "${answer}".`);
});
game.run();
