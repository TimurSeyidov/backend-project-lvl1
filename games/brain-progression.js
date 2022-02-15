import { game, getNumber } from '../src/index.js';

const gameProgression = () => (
  game('What number is missing in the progression?', () => {
    let start = getNumber(20);
    const step = getNumber(10);
    const exlcude = getNumber(10);
    const numbers = [];
    let answer;
    for (let i = 1; i <= 10; i += 1) {
      let push = start;
      if (i === exlcude) {
        answer = start;
        push = '..';
      }
      numbers.push(push);
      start += step;
    }
    return [numbers.join(' '), answer.toString()];
  })
);

export default gameProgression;
