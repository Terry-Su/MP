const getNodeConfigByPage = require('./getNodeConfigByPage')


const isVarsMethod = vars => typeof vars === 'function'

module.exports = function (page, specialConfigName) {
    let specialConfig
    
    const nodeConfig = getNodeConfigByPage(page)

    if (nodeConfig) {
        specialConfig = nodeConfig[specialConfigName]

        if (isVarsMethod(specialConfig)) {
            specialConfig = specialConfig()
        }
    }

    return specialConfig
}