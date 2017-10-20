const startAndWatchServer = require('./startAndWatchServer')
const watchNodeConfigServerEntryContainStartAndEnd= require('../watchNodeConfigServerEntryContainStartAndEnd')

module.exports = function (page) {
    startAndWatchServer(page)

    const callback = () => startAndWatchServer(page)
    watchNodeConfigServerEntryContainStartAndEnd(page, callback)
}