const program  = require('commander');
var pjson = require('./package.json');

program
  .version(pjson.version, '-v, --version')
  .parse(process.argv);

console.log("Thank you for using JS Boilerplate generator");