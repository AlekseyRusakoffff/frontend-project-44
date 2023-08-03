#!/usr/bin/env node
import { readlineSync, sayNameHello, num } from '../src/index.js';

function operation() {
  const arr = ['-', '+', '*'];
  const generateRandomOperator = Math.floor(Math.random() * arr.length);
  const passRandomOperator = arr[generateRandomOperator];
  return passRandomOperator;
}

function calculate(num1, num2, operator) {
  switch (operator) {
    case '*':
      return num1 * num2;
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    default:
      console.log('error');
  }
  return operator;
}

function gameCalc() {
  // console.log('Welcome to the Brain Games!');
  const userName = sayNameHello();
  // console.log(`Hello, ${userName}!`);
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const num1 = num(1, 25);
    const num2 = num(1, 25);
    const operator = operation();
    const str = '';
    const quest = readlineSync.question(`${'Question: '}${num1} ${operator} ${num2} ${'\nYour answer: '}`);
    const calc = calculate(num1, num2, operator);
    const userResponse = `${str}${calc}`;

    if (quest === userResponse) {
      console.log('Correct!');
    } else {
      console.log(`${quest}${' is wrong answer ;(. Correct answer was '}${userResponse}${"\nLet's try again"}, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

gameCalc();
