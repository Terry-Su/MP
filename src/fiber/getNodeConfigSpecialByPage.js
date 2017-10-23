const getNodeConfigByPage = require('./getNodeConfigByPage')
const getOutputPagePathByPage = require('./getOutputPagePathByPage')


const isVarsMethod = vars => typeof vars === 'function'

module.exports = function (page, specialConfigName) {
    let specialConfig
    
    const nodeConfig = getNodeConfigByPage(page)

    if (nodeConfig) {
        specialConfig = nodeConfig[specialConfigName]

        if (isVarsMethod(specialConfig)) {
            const outputPagePath = getOutputPagePathByPage(page)
            specialConfig = specialConfig(outputPagePath, page)
        }
    }

    return specialConfig
}