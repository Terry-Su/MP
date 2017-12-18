const PATH = require('path')
const FS = require('fs-extra')
const decache = require('decache')

module.exports = {
    getHtml() {
        const htmlPath = PATH.resolve(__dirname, './index.html')
        return {
            content: FS.readFileSync(htmlPath, {encoding: 'utf8'})
        }
    },
    getWebpack() {
        const webpackPath = PATH.resolve(__dirname, './webpack.config.js')
        decache(webpackPath)
        return require(webpackPath)
    }
}