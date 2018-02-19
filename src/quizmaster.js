const program  = require('commander');
const clear = require('clear');

const pjson = require('../package.json');

program
  .version(pjson.version, '-v, --version')
  .parse(process.argv);

clear();

// var currenDirectory = process.cwd();

require('./frameworks')();

