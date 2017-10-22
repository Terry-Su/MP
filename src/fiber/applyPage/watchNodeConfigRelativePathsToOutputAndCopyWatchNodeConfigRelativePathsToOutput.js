const copyWatchNodeConfigRelativePathsToOutput = require('./copyWatchNodeConfigRelativePathsToOutput')
const watchNodeConfigRelativePathsToOutputByPage = require('../watchNodeConfigRelativePathsToOutputByPage')


module.exports = function (page) {
    copyWatchNodeConfigRelativePathsToOutput(page)

    if (Config.shouldWatchNodeConfig) {
        const callback = () => copyWatchNodeConfigRelativePathsToOutput(page)
        watchNodeConfigRelativePathsToOutputByPage(page, callback)
    }
}