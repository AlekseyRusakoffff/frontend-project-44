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
    const gcd = num1;
    while (num1 !== num2) {
      if (num1 > num2) {
        num1 -= num2;
      } else {
        num2 -= num1;
      }
    }

    const correctAnswer = `${str}${gcd}`;

    if (quest === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${correctAnswer}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

gameGcd();
