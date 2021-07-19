const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('your name:', (answer) => {
  console.log('your name:', answer);
  rl.close();
});
