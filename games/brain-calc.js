/* eslint no-eval: 0 */
import { game, getNumber } from '../src/index.js';

const gameCalc = () => {
  const description = 'What is the result of the expression?';
  const question = () => {
    const getZnak = () => {
      const items = ['+', '-', '*'];
      return items[Math.floor(Math.random() * items.length)];
    };
    const a = getNumber(100);
    const b = getNumber(100);
    const znak = getZnak();
    const q = `${a} ${znak} ${b}`;
    const answer = eval(q);
    return [q, answer.toString()];
  };
  return game(description, question);
};

export default gameCalc;
