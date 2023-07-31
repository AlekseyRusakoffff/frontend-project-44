import readlineSync from 'readline-sync';
import { sayNameHello } from './cli.js';

const num = (minNum, maxNum) => {
  const number = Math.floor(Math.random() * (maxNum - minNum) + minNum);
  return number;
};

export { readlineSync, sayNameHello, num };
