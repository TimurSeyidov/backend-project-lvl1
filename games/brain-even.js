import { game, getNumber } from '../src/index.js';

const gameEven = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  const question = () => {
    const number = getNumber(100);
    return [number, number % 2 ? 'no' : 'yes'];
  };
  return game(description, question);
};

export default gameEven;
