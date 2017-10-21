const copyWatchMpConfigRelativePathsToOutput = require('./copyWatchMpConfigRelativePathsToOutput')
const watchMpConfigRelativePathsToOutputByPageOrProject = require('../watchMpConfigRelativePathsToOutputByPageOrProject')


module.exports = function (project) {
    copyWatchMpConfigRelativePathsToOutput(project)
    
    const callback = () => copyWatchMpConfigRelativePathsToOutput(project)
    watchMpConfigRelativePathsToOutputByPageOrProject(project, callback)
}