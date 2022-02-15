#!/usr/bin/env node
/* eslint no-eval: 0 */
import { Game, getNumber } from '../src/index.js';

const game = new Game('What is the result of the expression?', 3, true);
game.setQuestion(() => {
  const getZnak = () => {
    const items = ['+', '-', '*'];
    return items[Math.floor(Math.random() * items.length)];
  };
  const a = getNumber(100);
  const b = getNumber(100);
  const znak = getZnak();
  const question = `${a} ${znak} ${b}`;
  const answer = eval(question);
  return [question, answer.toString()];
});
game.setWrong((answer, userAnswer) => {
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
});
game.run();
