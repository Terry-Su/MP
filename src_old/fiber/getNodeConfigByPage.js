const Interface = require('../interface/index')
const InitialState = require('../store/initialState')
const defaultNodeConfig = require('../config/defaultNodeConfig')


const getNodeConfigPath = page => {
    const { path: pagePath } = page
    return PATH.resolve(pagePath, Interface.nodeConfigRelativePath || InitialState.nodeConfigRelativePath)
}

module.exports = function (page) {
    let nodeConfig
    const nodeConfigPath = getNodeConfigPath(page)
    
    try {
        nodeConfig = require(nodeConfigPath)
        Util.cleanRequreCache(nodeConfigPath)

        nodeConfig = Object.assign({}, defaultNodeConfig, nodeConfig)
    } catch (e) {
        
    }

    return nodeConfig
}