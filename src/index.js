import readlineSync from 'readline-sync';

class Game {
  constructor(description) {
    this.description = description;
    this.count = 3;
    this.useTryAgain = true;
  }

  setCount(count) {
    this.count = count;
  }

  setShowTryAgain(value) {
    this.useTryAgain = Boolean(value);
  }

  setQuestion(question) {
    this.question = question;
  }

  setWrong(wrongCallback) {
    this.wrongCallback = wrongCallback;
  }

  run() {
    console.log('Welcome to the Brain Games!');
    this.name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${this.name}`);
    console.log(this.description);
    if (typeof this.question === 'function') {
      for (let i = 0; i < this.count; i += 1) {
        const [q, a] = this.question();
        console.log(`Question: ${q}`);
        const answer = readlineSync.question('Your answer: ');
        if (a === answer) {
          console.log('Correct!');
        } else {
          if (typeof this.wrongCallback === 'function') {
            this.wrongCallback(a, answer);
          }
          if (this.useTryAgain) {
            console.log(`Let's try again, ${this.name}!`);
          }
        }
      }
    }
    console.log(`Congratulations, ${this.name}!`);
  }
}

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

export { Game, getNumber, getGcd };
