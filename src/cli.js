import readlineSync from 'readline-sync';

// Wait for user's response.
// eslint-disable-next-line no-unused-vars

export const sayNameHello = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
};
export default sayNameHello;
