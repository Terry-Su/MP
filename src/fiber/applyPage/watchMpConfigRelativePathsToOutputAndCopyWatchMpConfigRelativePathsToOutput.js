const copyWatchMpConfigRelativePathsToOutput = require('./copyWatchMpConfigRelativePathsToOutput')
const watchMpConfigRelativePathsToOutputByPageOrProject = require('../watchMpConfigRelativePathsToOutputByPageOrProject')


module.exports = function (page) {
    copyWatchMpConfigRelativePathsToOutput(page)
    
    const callback = () => copyWatchMpConfigRelativePathsToOutput(page)
    watchMpConfigRelativePathsToOutputByPageOrProject(page, callback)
}