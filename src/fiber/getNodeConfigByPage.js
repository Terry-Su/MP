const Interface = require('../interface/index')
const InitialState = require('../store/initialState')


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
    } catch (e) {
        
    }

    return nodeConfig
}