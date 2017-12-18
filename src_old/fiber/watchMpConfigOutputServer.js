const getMpConfigOutputServer= require('./getMpConfigOutputServer')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (callback) {
  watchPlainObjectSpeicalByPage(getMpConfigOutputServer, null, callback, 1000)
}