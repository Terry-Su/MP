const watchNodeConfigHtmlAndRebuildHtml = require('./watchNodeConfigHtmlAndRebuildHtml')
const watchNodeConfigWebpackAndRestartWebpack = require('./watchNodeConfigWebpackAndRestartWebpack')
const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput = require('./watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput')
const watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput = require('./watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput')
const getNodeConfigHtmlByPage = require('../getNodeConfigHtmlByPage')
const getNodeConfigWebpackByPage = require('../getNodeConfigWebpackByPage')
const getMpConfigRelativePathsToOutput = require('../getMpConfigRelativePathsToOutput')
const getNodeConfigRelativePathsToOutputByPage = require('../getNodeConfigRelativePathsToOutputByPage')

module.exports = function (page) {
    const watchHtmlConfigAndRebuildHtmlIfNeeded = (page) => {
        const htmlConfig = getNodeConfigHtmlByPage(page)
        const existHtmlConfig = htmlConfig !== undefined
        if (existHtmlConfig) {
            watchNodeConfigHtmlAndRebuildHtml(page)
        }
    }

    const watchWebpackConfigAndRebuildHtmlIfNeeded = (page) => {
        const webpackConfig = getNodeConfigWebpackByPage(page)
        const existWebpackConfig = webpackConfig !== undefined
        if (existWebpackConfig) {
            watchNodeConfigWebpackAndRestartWebpack(page)
        }
    }

    const watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded = (page) => {
        const mpConfigRelativePathsToOutput = getMpConfigRelativePathsToOutput()
        const exsitMpConfigRelativePathsToOutput = mpConfigRelativePathsToOutput !== undefined
        if (exsitMpConfigRelativePathsToOutput) {
            watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutput(page)
        }
    }

    const watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutputIfNeeded = (page) => {
        const nodeConfigRelativePathsToOutput = getNodeConfigRelativePathsToOutputByPage(page)
        const exsitNodeConfigRelativePathsToOutput = nodeConfigRelativePathsToOutput !== undefined
        if (exsitNodeConfigRelativePathsToOutput) {
            watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutput(page)
        }
    }

    watchHtmlConfigAndRebuildHtmlIfNeeded(page)

    watchWebpackConfigAndRebuildHtmlIfNeeded(page)

    watchMpConfigRelativePathsToOutputAndCopyWatchMpConfigRelativePathsToOutputIfNeeded(page)

    watchNodeConfigRelativePathsToOutputAndCopyWatchNodeConfigRelativePathsToOutputIfNeeded(page)
}