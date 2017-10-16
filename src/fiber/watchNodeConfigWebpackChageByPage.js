const getNodeConfigWebpackByPage= require('./getNodeConfigWebpackByPage')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (page, callback) {
  watchPlainObjectSpeicalByPage(getNodeConfigWebpackByPage, page, callback, 1000)
}