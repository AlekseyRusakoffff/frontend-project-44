import readlineSync from 'readline-sync';
import { sayNameHello } from './cli.js';

function num() {
  const number = (Math.round(Math.random() * 25));
  return number;
}

export { readlineSync, sayNameHello, num };
