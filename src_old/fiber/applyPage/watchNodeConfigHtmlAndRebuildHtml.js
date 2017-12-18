const buildHtml = require('./buildHtml')
const watchNodeConfigHtmlByPage = require('../watchNodeConfigHtmlByPage')

module.exports = function (page) {
    buildHtml(page)

    if (Config.shouldWatchNodeConfig) {
        const callback = () => buildHtml(page)
        watchNodeConfigHtmlByPage(page, callback)
    }
}