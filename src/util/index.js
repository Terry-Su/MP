const checkPathExists = require('./checkPathExists')
const checkPathExistsAndIsDirectory = require('./checkPathExistsAndIsDirectory')
const execWebpack = require('./execWebpack')
const cleanRequreCache = require('./cleanRequreCache')
const equalPlainObjects = require('./equalPlainObjects')
const logError = require('./logError')
const mapPlainObjectValuesAToB = require('./mapPlainObjectValuesAToB')
const watchPath = require('./watchPath/index')


const util = {
    checkPathExists,
    checkPathExistsAndIsDirectory,
    execWebpack,
    cleanRequreCache,
    equalPlainObjects,
    logError,
    mapPlainObjectValuesAToB,
    watchPath,
}

module.exports = util