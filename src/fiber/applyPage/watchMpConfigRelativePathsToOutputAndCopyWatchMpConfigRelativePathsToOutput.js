const copyWatchMpConfigRelativePathsToOutput = require('./copyWatchMpConfigRelativePathsToOutput')
const watchMpConfigRelativePathsToOutputByPage = require('../watchMpConfigRelativePathsToOutputByPage')


module.exports = function (page) {
    copyWatchMpConfigRelativePathsToOutput(page)
    
    const callback = () => copyWatchMpConfigRelativePathsToOutput(page)
    watchMpConfigRelativePathsToOutputByPage(page, callback)
}