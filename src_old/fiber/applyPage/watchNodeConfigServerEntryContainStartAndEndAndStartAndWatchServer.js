const startAndWatchServer = require('./startAndWatchServer')
const watchNodeConfigServerEntryContainStartAndEnd = require('../watchNodeConfigServerEntryContainStartAndEnd')

module.exports = function (page) {
    startAndWatchServer(page)

    if (Config.shouldWatchNodeConfig) {
        const callback = () => startAndWatchServer(page)
        watchNodeConfigServerEntryContainStartAndEnd(page, callback)
    }
}