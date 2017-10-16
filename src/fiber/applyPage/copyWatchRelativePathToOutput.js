const copyWatchPageOrProjectRelativePathToOutput = require('../copyWatchPageOrProjectRelativePathToOutput')
const getOutputPagePathByPage = require('../getOutputPagePathByPage')

module.exports = function (relativePath, page) {
    copyWatchPageOrProjectRelativePathToOutput(getOutputPagePathByPage, relativePath, page)
}