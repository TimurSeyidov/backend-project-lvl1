import { game, getGcd, getNumber } from '../src/index.js';

const gameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  const question = () => {
    let a = getNumber(100);
    let b = getNumber(100);
    while (getGcd(a, b) === 1) {
      a = getNumber(100);
      b = getNumber(100);
    }
    const q = `${a} ${b}`;
    return [q, getGcd(a, b).toString()];
  };
  return game(description, question);
};

export default gameGcd;
