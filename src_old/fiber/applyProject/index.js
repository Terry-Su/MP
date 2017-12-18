const buildFolderStructure = require('./buildFolderStructure')
const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput = require('./watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput')
const getMpConfigRelativePathsToOutput = require('../getMpConfigRelativePathsToOutput')


module.exports = function (project) {
    let projectInfo = project
    project = project.project

    buildFolderStructure(projectInfo)

    const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded = (project) => {
        const mpConfigRelativePathsToOutput = getMpConfigRelativePathsToOutput()
        const exsitMpConfigRelativePathsToOutput = mpConfigRelativePathsToOutput !== undefined
        if (exsitMpConfigRelativePathsToOutput) {
            watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput(project)
        }
    }

    watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded(project)  
}