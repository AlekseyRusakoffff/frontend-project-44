#!/usr/bin/env node
import { sayNameHello } from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = sayNameHello();
console.log(`Hello, ${userName}!`);
