const getNodeConfigByPage = require('./getNodeConfigByPage')


module.exports = function (page) {
    const nodeConfig = getNodeConfigByPage(page)

    if (nodeConfig) {
        return nodeConfig['outputPath']
    }

    return undefined
}