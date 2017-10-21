const getMpConfigRelativePathsToOutput= require('./getMpConfigRelativePathsToOutput')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (page, callback) {
  watchPlainObjectSpeicalByPage(getMpConfigRelativePathsToOutput, page, callback, 1000)
}