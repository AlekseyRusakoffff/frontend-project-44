#!/usr/bin/env node
import { readlineSync, sayNameHello, num } from '../src/index.js';

function game() {
  console.log('Welcome to the Brain Games!');
  const userName = sayNameHello();
  console.log(`Hello, ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const numsave = num(1, 100);
    const quest = readlineSync.question(`${'question: '}${numsave}${'\nYour answer: '}`);
    if ((numsave % 2 === 0 && quest === 'yes') || (numsave % 2 !== 0 && quest === 'no')) {
      console.log('Correct!');
    } else {
      console.log(`${quest} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}

game();
