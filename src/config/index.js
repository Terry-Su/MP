const PATH = require('path')

const mpConfigPath = PATH.resolve(process.cwd(), './mp.config.js')
const mpConfig = require(mpConfigPath)
const defaultMpConfig = require('./defaultMpConfig')

const config = Object.assign({}, defaultMpConfig, mpConfig, {

})


module.exports = config
