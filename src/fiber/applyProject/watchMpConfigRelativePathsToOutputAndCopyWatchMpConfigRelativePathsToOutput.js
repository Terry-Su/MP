const copyWatchMpConfigRelativePathsToOutput = require('./copyWatchMpConfigRelativePathsToOutput')
const watchMpConfigRelativePathsToOutputByPage = require('../watchMpConfigRelativePathsToOutputByPage')


module.exports = function (project) {
    copyWatchMpConfigRelativePathsToOutput(project)
    
    const callback = () => copyWatchMpConfigRelativePathsToOutput(project)
    watchMpConfigRelativePathsToOutputByPage(project, callback)
}