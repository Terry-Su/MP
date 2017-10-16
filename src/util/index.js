const checkPathExists = require('./checkPathExists')
const checkPathExistsAndIsDirectory = require('./checkPathExistsAndIsDirectory')
const execWebpack = require('./execWebpack')
const cleanRequreCache = require('./cleanRequreCache')
const equalPlainObjects = require('./equalPlainObjects')
const logError = require('./logError')
const mapPlainObjectValuesAToB = require('./mapPlainObjectValuesAToB')


const util = {
    checkPathExists,
    checkPathExistsAndIsDirectory,
    execWebpack,
    cleanRequreCache,
    equalPlainObjects,
    logError,
    mapPlainObjectValuesAToB,
}

module.exports = util