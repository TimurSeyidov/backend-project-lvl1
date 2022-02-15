import readlineSync from 'readline-sync';

const getName = (question) => readlineSync.question(`${question} `);

export default getName;
