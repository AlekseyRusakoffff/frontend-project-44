#!/usr/bin/env node
import { readlineSync, sayNameHello, num } from '../src/index.js';

function gameGcd() {
  const userName = sayNameHello();
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    let num1 = num(1, 25);
    let num2 = num(1, 25);

    const str = '';
    const quest = readlineSync.question(`${'Question: '} ${num1} ${num2} ${'\nYour answer: '}`);
    let gcd;
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }
    gcd = num1;
    const userResponse = `${str}${gcd}`;

    if (quest === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${userResponse}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

gameGcd();
