import readlineSync from 'readline-sync';

const getName = (question) => {
    return readlineSync.question(`${question} `);
}

export { getName }