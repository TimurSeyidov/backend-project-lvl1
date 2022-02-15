#!/usr/bin/env node
import getAnswer from '../src/cli.js';

const getRandomInt = (max) =>  Math.floor(Math.random() * max);
const getNegative = (answer) => answer === 'no' ? 'yes' : 'no';
const checkAnswer = (number, answer) => {
    const res = number % 2;
    return res && answer === 'no' || !res && answer === 'yes';
};

console.log('Welcome to the Brain Games!');
const name = getAnswer('May I have your name? ');
console.log(`Hello, ${name}!`);
console.log(`Answer "yes" if the number is even, otherwise answer "no".`);
for (let i = 0; i < 3; i += 1) {
    const number = getRandomInt(100);
    console.log('Question:', number);
    const answer = getAnswer('Your answer:');
    if (!checkAnswer(number, answer)) {
        console.log(`Answer "${answer}" if the number is even, otherwise answer "${getNegative(answer)}".`);
    } else {
        console.log('Correct!');
    }
}
console.log(`Congratulations, ${name}!`);