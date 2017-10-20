const watchNodeConfigHtmlAndRebuildHtml = require('./watchNodeConfigHtmlAndRebuildHtml')
const watchNodeConfigWebpackAndRestartWebpack = require('./watchNodeConfigWebpackAndRestartWebpack')
const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput = require('./watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput')
const watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput = require('./watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput')
const watchNodeConfigServerEntryContainStartAndEndAndStartAndWatchServer = require('./watchNodeConfigServerEntryContainStartAndEndAndStartAndWatchServer')
const getNodeConfigHtmlByPage = require('../getNodeConfigHtmlByPage')
const getNodeConfigWebpackByPage = require('../getNodeConfigWebpackByPage')
const getMpConfigRelativePathsToOutput = require('../getMpConfigRelativePathsToOutput')
const getNodeConfigRelativePathsToOutputByPage = require('../getNodeConfigRelativePathsToOutputByPage')
const getNodeConfigServerEntryContainStartAndEndByPage = require('../getNodeConfigServerEntryContainStartAndEndByPage')


const watchConfigAndImplement = (page, getConfigByPage, implementFnByPage) => page => {
    const config = getConfigByPage(page)
    const existConfig = config !== undefined
    if (existConfig) {
        implementFnByPage(page)
    }
}


module.exports = function (page) {
    const watchHtmlConfigAndRebuildHtmlIfNeeded = watchConfigAndImplement(page, getNodeConfigHtmlByPage, watchNodeConfigHtmlAndRebuildHtml)

    const watchWebpackConfigAndRebuildHtmlIfNeeded = watchConfigAndImplement(page, getNodeConfigWebpackByPage, watchNodeConfigWebpackAndRestartWebpack)

    const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded = watchConfigAndImplement(page, getMpConfigRelativePathsToOutput, watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput)

    const watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutputIfNeeded = watchConfigAndImplement(page, getNodeConfigRelativePathsToOutputByPage, watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput)

    const watchNodeConfigServerEntryContainStartAndEndAndStartAndWatchServerIfNeeded = watchConfigAndImplement(page, getNodeConfigServerEntryContainStartAndEndByPage, watchNodeConfigServerEntryContainStartAndEndAndStartAndWatchServer)
    


    watchHtmlConfigAndRebuildHtmlIfNeeded(page)

    watchWebpackConfigAndRebuildHtmlIfNeeded(page)

    watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded(page)

    watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutputIfNeeded(page)

    watchNodeConfigServerEntryContainStartAndEndAndStartAndWatchServerIfNeeded(page)
}