
const PATH = require('path')

const Interface = require('../interface/index')
const InitialState = require('../store/initialState')
const defaultMpConfig = require('./defaultMpConfig')

const getConfigPathFileName = () => Interface.mpConfigRelativePath || InitialState.mpConfigRelativePath

const mpConfigPath = PATH.resolve(process.cwd(), getConfigPathFileName())
const mpConfig = require(mpConfigPath)


const config = Object.assign({}, defaultMpConfig, mpConfig, {

})


module.exports = config
