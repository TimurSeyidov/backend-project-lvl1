import { game, getNumber } from '../src/index.js';

const gamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const question = () => {
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
  };
  return game(description, question);
};

export default gamePrime;
