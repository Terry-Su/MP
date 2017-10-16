const copyWatchRelativePathToOutput = require('./copyWatchRelativePathToOutput')

const copyWatchRelativePathToOutputByPage = page => relativePath => copyWatchRelativePathToOutput(relativePath, page)


module.exports = function (page) {
    const relativePathsToOutput = Config.relativePathsToOutput
    R.map(copyWatchRelativePathToOutputByPage(page), relativePathsToOutput)
}