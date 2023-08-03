import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
export const sayNameHello = () => {
  const userName = readlineSync.question('May I have your name? ');

  return userName;
};
const userName = sayNameHello();
console.log(`Hello, ${userName}!`);
export default sayNameHello;
