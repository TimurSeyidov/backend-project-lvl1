#!/usr/bin/env node
import { getName } from '../src/cli.js';
console.log('Welcome to the Brain Games!');
const name = getName('May I have your name? ');
console.log(`Hello, ${name}!`);
