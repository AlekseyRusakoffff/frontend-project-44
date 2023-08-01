#!/usr/bin/env node

import { readlineSync, sayNameHello, num } from '../src/index.js';

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }

  let divider = 2;

  while (divider <= number / 2) {
    if (number % divider === 0) {
      return false;
    }

    divider += 1;
  }

  return true;
};

// return correctAnswer;
const getQuestionAndAnswer = () => {
  const question = num(2, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';
  return [question, correctAnswer];
};

function gamePrime() {
  const userName = sayNameHello();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const [question, correctAnswer] = getQuestionAndAnswer();

    const quest = readlineSync.question(`${'Question: '}${question} ${'\nYour answer: '}`);

    if (quest === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${correctAnswer}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
gamePrime();
