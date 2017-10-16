const getNodeConfigRelativePathsToOutputByPage= require('./getNodeConfigRelativePathsToOutputByPage')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (page, callback) {
  watchPlainObjectSpeicalByPage(getNodeConfigRelativePathsToOutputByPage, page, callback, 1000)
}