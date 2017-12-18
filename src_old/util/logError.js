const Chalk = require('chalk')


module.exports = function (e) {
  console.log(Chalk.red.bold(e.toString()))
}