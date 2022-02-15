import readlineSync from 'readline-sync';

const game = (description, question) => {
  const GAME_COUNT = 3;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  console.log(description);
  for (let i = 0; i < GAME_COUNT; i += 1) {
    const [q, a] = question();
    console.log(`Question: ${q}`);
    const answer = readlineSync.question('Your answer: ');
    if (a !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${a}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    } 
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};

const getNumber = (max) => {
  let res = 0;
  while (res <= 0) {
    res = Math.floor(Math.random() * max);
  }
  return res;
};

const getGcd = (a, b) => {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
};

export { game, getNumber, getGcd };
