#!/usr/bin/env node
import { Game, getGcd, getNumber } from '../src/index.js';

const game = new Game('Find the greatest common divisor of given numbers.', 3, true);
game.setQuestion(() => {
  let a = getNumber(100);
  let b = getNumber(100);
  while (getGcd(a, b) === 1) {
    a = getNumber(100);
    b = getNumber(100);
  }
  const question = `${a} ${b}`;
  return [question, getGcd(a, b).toString()];
});
game.setWrong((answer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
});
game.run();
