const getNodeConfigSpecialByPage = require('./getNodeConfigSpecialByPage')


module.exports = function (page) {
    return getNodeConfigSpecialByPage(page, 'serverEntryContainStartAndEnd')
}