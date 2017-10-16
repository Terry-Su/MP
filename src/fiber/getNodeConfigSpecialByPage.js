const getNodeConfigByPage = require('./getNodeConfigByPage')


module.exports = function (page, specialConfigName) {
    let specialConfig
    
    const nodeConfig = getNodeConfigByPage(page)

    if (nodeConfig) {
        specialConfig = nodeConfig[specialConfigName]
    }

    return specialConfig
}