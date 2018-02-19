const inquirer = require('inquirer');

module.exports = function Framework() {
  var prompt = inquirer.createPromptModule();
  var question = {
    name: 'framework',
    message: 'Which framework would you like to install?',
    type: 'list',
    choices: ['React']
  }

  prompt(question).then((answer) => {
    console.log(answer);
    if (answer.framework === 'React') {
      require('./frameworks/react')();
    }
  });
}