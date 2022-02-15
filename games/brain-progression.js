#!/usr/bin/env node
import { Game, getNumber } from '../src/index.js';

const game = new Game('What number is missing in the progression?', 3, true);
game.setQuestion(() => {
  let start = getNumber(20);
  const step = getNumber(10);
  const exlcude = getNumber(10);
  const numbers = [];
  let answer;
  for (let i = 1; i <= 10; i += 1) {
    if (i === exlcude) {
      answer = start;
      numbers.push('..');
    } else {
      numbers.push(start);
    }
    start += step;
  }
  return [numbers.join(' '), answer.toString()];
});
game.setWrong((answer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
});
game.run();
