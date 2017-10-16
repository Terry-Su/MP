
const PATH = require('path')

const Util = require('../util/index')
const Interface = require('../interface/index')
const InitialState = require('../store/initialState')
const defaultMpConfig = require('./defaultMpConfig')


const getConfigPathFileName = () => Interface.mpConfigRelativePath || InitialState.mpConfigRelativePath
const mpConfigPath = PATH.resolve(process.cwd(), getConfigPathFileName())

const getRealtimeConfig = () => {
    const mpConfig = require(mpConfigPath)
    Util.cleanRequreCache(mpConfigPath)
    
    const config = Object.assign({}, defaultMpConfig, mpConfig, {
    
    })
    return config
}

function Config() {
    Util.mapPlainObjectValuesAToB(getRealtimeConfig(), this)
}

Config.prototype.refreshConfig = function() {
    Util.mapPlainObjectValuesAToB(getRealtimeConfig(), this)
}


module.exports = new Config()
