#!/usr/bin/env node

import { readlineSync, sayNameHello, num } from '../src/index.js';

const progressionLength = num(5, 10);

const getArithmeticProgression = () => {
  let progressionNumber = num(0, 50);
  const step = num(2, 5);
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(progressionNumber);
    progressionNumber += step;
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const progression = getArithmeticProgression();
  const randomIndex = num(0, progressionLength);

  const correctAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = progression;
  return [question, correctAnswer];
};

function gameProgression() {
  const userName = sayNameHello();
  console.log('What number is missing in the progression?');
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
gameProgression();
