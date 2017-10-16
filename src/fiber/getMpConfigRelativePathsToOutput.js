module.exports = function (page) {
    Config.refreshConfig()
    return Config.relativePathsToOutput
}