const getNodeConfigServerEntryContainStartAndEndByPage= require('./getNodeConfigServerEntryContainStartAndEndByPage')
const watchPlainObjectSpeicalByPage = require('./watchPlainObjectSpeicalByPage')


module.exports = function (page, callback) {
  watchPlainObjectSpeicalByPage(getNodeConfigServerEntryContainStartAndEndByPage, page, callback, 1000)
}