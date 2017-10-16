const Interface = require('../../interface/index')
const InitialState = require('../../store/initialState')
const getNodeConfigWebpackByPage = require('../getNodeConfigWebpackByPage')
const getOutputPagePathByPage = require('../getOutputPagePathByPage')

const getKeys = object => Object.keys(object)
const checkExistRawWebpackConfigEntry = (rawWebpackConfig) => getKeys(rawWebpackConfig).includes('entry')
const checkExistRawWebpackConfigOutput = (rawWebpackConfig) => getKeys(rawWebpackConfig).includes('output')
const getFileName = filePath => PATH.basename(filePath)
const getDefaultEntry = page => {
    const { path: pagePath } = page
    return PATH.resolve(pagePath, Interface.webpackEntryRelativePath || InitialState.webpackEntryRelativePath)
}
const getDefaultOutput = page => {
    const outputPagePath = getOutputPagePathByPage(page)
    const path = PATH.resolve(outputPagePath, Interface.webpackOutputFolderRelativePath || InitialState.webpackOutputFolderRelativePath)
    const filename = Interface.webpackOutputFileName || InitialState.webpackOutputFileName
    return {
        path,
        filename,
    }
}

module.exports = function (page) {
    const rawWebpackConfig = getNodeConfigWebpackByPage(page)

    const cookRawWebpackConfig = rawWebpackConfig => {
        let cookedWebpackConfig = Object.assign({}, rawWebpackConfig)

        const checkEntryAndCookWebpackConfigIfNeeded = webpackConfig => {
            // check entry
            const existRawWebpackConfigEntry = checkExistRawWebpackConfigEntry(webpackConfig)
            // add default entry to webpack config if entry don't exist
            if (!existRawWebpackConfigEntry) {
                const entry = getDefaultEntry(page)
                webpackConfig = Object.assign({}, webpackConfig, { entry })
            }
            return webpackConfig
        }

        const checkOutputAndCookWebpackConfigIfNeeded = webpackConfig => {
            // check output
            const existRawWebpackConfigOutput = checkExistRawWebpackConfigOutput(webpackConfig)
            // add default output to webpack config if output don't exist
            if (!existRawWebpackConfigOutput) {
                const output = getDefaultOutput(page)
                webpackConfig = Object.assign({}, webpackConfig, { output })
            }
            return webpackConfig
        }

        cookedWebpackConfig = checkEntryAndCookWebpackConfigIfNeeded(cookedWebpackConfig)

        cookedWebpackConfig = checkOutputAndCookWebpackConfigIfNeeded(cookedWebpackConfig)

        return cookedWebpackConfig
    }

    const cookedWebpackConfig = cookRawWebpackConfig(rawWebpackConfig)

    const webpackWatcher = Util.execWebpack(cookedWebpackConfig)

    return webpackWatcher
}