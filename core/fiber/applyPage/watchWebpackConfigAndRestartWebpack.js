const applyWebpack = require('./applyWebpack')
const watchNodeWebpackConfigChageByPage = require('../watchNodeWebpackConfigChageByPage')

const logWebpackRestart = () => console.log(Chalk.green.bold('\nWebpack restarted\n'))

module.exports = function (page) {
    let webpackWatcher

    webpackWatcher = applyWebpack(page)

    const callback = () => {
        webpackWatcher.close(() => {
            webpackWatcher = applyWebpack(page)

            logWebpackRestart()
        })
        
    }

    watchNodeWebpackConfigChageByPage(page, callback, 100)
}