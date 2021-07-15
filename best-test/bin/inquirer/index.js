const inquirer = require('inquirer');
inquirer
  .prompt([
    {
      type: 'input',
      name: 'yourName',
      message: 'your name',
      default: 'noname',
    },
    {
      type: 'number',
      name: 'yourNum',
      message: 'your num',
    },
  ])
  .then((answers) => {
    console.log(answers);
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
