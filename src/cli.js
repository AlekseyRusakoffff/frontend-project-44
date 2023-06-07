import readlineSync from 'readline-sync';

export const sayNameHello = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);

  return userName;
};
export default sayNameHello;
