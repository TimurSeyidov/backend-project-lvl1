#!/usr/bin/env node
import { Game, getNumber } from '../src/index.js';

const game = new Game('What number is missing in the progression?');
game.setQuestion(() => {
  const isSimple = (num) => {
    let total = 0;
    for (let i = 1, j = num; i <= j; i += 1) {
      if (num % i === 0) {
        total += 1;
      }
      if (total > 2) {
        break;
      }
    }
    return total === 2;
  };
  const number = getNumber(200);
  return [number, isSimple(number) ? 'yes' : 'no'];
});
game.setWrong((answer, userAnswer) => {
  console.log(`Answer "${userAnswer}" if given number is prime. Otherwise answer "${answer}".`);
});
game.run();
