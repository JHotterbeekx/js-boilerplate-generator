const inquirer = require('inquirer');
const cmd = require('node-cmd');

module.exports = function React() {
  var prompt = inquirer.createPromptModule();
  var question = {
    name: 'builder',
    message: 'Which builder would you like to install?',
    type: 'list',
    choices: ['Webpack', 'Parcel']
  }

  prompt(question).then((answer) => {
    console.log('Adding React...')
    cmd.run("yarn add react");
    switch (answer.builder) {
      case 'Webpack':
        console.log('Adding Webpack...');
        cmd.run('yarn add webpack webpack-dev-server');
        break;
      case 'Parcel':
        console.log('Adding Parcel...');
        cmd.run('yarn add parcel-bundler');
        break;  
    }
    console.log("Thank you for using JS Boilerplate generator");
  });
}