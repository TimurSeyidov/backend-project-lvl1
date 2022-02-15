#!/usr/bin/env node
import getAnswer from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = getAnswer('May I have your name?');
console.log(`Hello, ${name}`);
