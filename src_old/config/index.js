
const PATH = require('path')

const Util = require('../util/index')
const InitialState = require('../store/initialState')
const defaultMpConfig = require('./defaultMpConfig')
const Selector = require('../redux/selector/index')

const mpConfigPath = Selector.getMpConfigPath()

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
