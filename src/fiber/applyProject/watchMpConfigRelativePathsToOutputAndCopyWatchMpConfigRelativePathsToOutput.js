const copyWatchMpConfigRelativePathsToOutput = require('./copyWatchMpConfigRelativePathsToOutput')
const watchMpConfigRelativePathsToOutputByPageOrProject = require('../watchMpConfigRelativePathsToOutputByPageOrProject')


module.exports = function (project) {
    copyWatchMpConfigRelativePathsToOutput(project)

    if (Config.shouldWatchMpConfig) {
        const callback = () => copyWatchMpConfigRelativePathsToOutput(project)
        watchMpConfigRelativePathsToOutputByPageOrProject(project, callback)
    }
   
}