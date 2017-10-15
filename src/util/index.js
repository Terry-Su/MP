const checkPathExsitsAndIsDirectory = require('./checkPathExsitsAndIsDirectory')
const execWebpack = require('./execWebpack')
const cleanRequreCache = require('./cleanRequreCache')
const equalPlainObjects = require('./equalPlainObjects')
const logError = require('./logError')


const util = {
    checkPathExsitsAndIsDirectory,
    execWebpack,
    cleanRequreCache,
    equalPlainObjects,
    logError,
}

module.exports = util