const copyWatchRelativePathToOutput = require('./copyWatchRelativePathToOutput')
const getNodeConfigRelativePathsToOutputByPage = require('../getNodeConfigRelativePathsToOutputByPage')

const copyWatchRelativePathToOutputByPage = page => relativePath => copyWatchRelativePathToOutput(relativePath, page)


module.exports = function (page) {
    const relativePathsToOutput = getNodeConfigRelativePathsToOutputByPage(page)
    R.map(copyWatchRelativePathToOutputByPage(page), relativePathsToOutput)
}