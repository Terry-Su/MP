const copyWatchRelativePathToOutput = require('./copyWatchRelativePathToOutput')

const copyWatchRelativePathToOutputByProject = project => relativePath => copyWatchRelativePathToOutput(relativePath, project)


module.exports = function (project) {
    const relativePathsToOutput = Config.relativePathsToOutput
    R.map(copyWatchRelativePathToOutputByProject(project), relativePathsToOutput)
}