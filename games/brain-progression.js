import { game, getNumber } from '../src/index.js';

const gameProgression = () => {
  const description = 'What number is missing in the progression?';
  const question = () => {
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
  };
  return game(description, question);
};

export default gameProgression;
