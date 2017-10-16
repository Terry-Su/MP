const getNodeConfigHtmlByPage= require('./getNodeConfigHtmlByPage')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (page, callback) {
  watchPlainObjectSpeicalByPage(getNodeConfigHtmlByPage, page, callback, 1000)
}