const PATH = require('path')

const Interface = require('../interface/index')
const defaultMpConfig = require('./defaultMpConfig')

const getConfigPathFileName = () => `./${Interface.configAlias}` || './mp.config.js'

const mpConfigPath = PATH.resolve(process.cwd(), getConfigPathFileName())
const mpConfig = require(mpConfigPath)


const config = Object.assign({}, defaultMpConfig, mpConfig, {

})


module.exports = config
