const copyWatchPageOrProjectRelativePathToOutput = require('../copyWatchPageOrProjectRelativePathToOutput')
const getOutputProjectPathByProject = require('../getOutputProjectPathByProject')

module.exports = function (relativePath, project) {
    copyWatchPageOrProjectRelativePathToOutput(getOutputProjectPathByProject, relativePath, project)
}