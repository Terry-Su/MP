const getOutputPagePathByPage = require('../getOutputPagePathByPage')
const getNodeConfigServerEntryContainStartAndEndByPage = require('../getNodeConfigServerEntryContainStartAndEndByPage')

const saveWatcher = (watcher, absolutePath) => Watcher.save(absolutePath, watcher)
const resetWatcher = absolutePath => Watcher.reset(absolutePath)

const startServer = (serverEntryPath, page) => {
    try {
        const server = require(serverEntryPath)
        Util.cleanRequreCache(serverEntryPath)
        
        const outputPagePath = getOutputPagePathByPage(page)
        server.end(outputPagePath, page)
        server.start(outputPagePath, page)


    } catch (e) {

    }
}

const watch = (absolutePath, callback) => {
    let watcher

    const watcherCallback = (event, path) => {
        const isFileAddedAndNotAbsolutePath = (event, path) => event === 'add' && path !== absolutePath        
        const isFileChangedAndNotAbsolutePath = (event, path) => event === 'change' && path !== absolutePath

        const isFileChangedAndNotAbsolutePathState = isFileChangedAndNotAbsolutePath(event, path)
        const isFileAddedAndNotAbsolutePathState = isFileAddedAndNotAbsolutePath(event, path)        
        const shouldCallback = isFileChangedAndNotAbsolutePath || isFileAddedAndNotAbsolutePathState

        if (shouldCallback) {
            callback(absolutePath)
        }
    }

    watcher = Util.watchPath(absolutePath, watcherCallback)

    saveWatcher(watcher, absolutePath)
}

const watchAndServer = (serverEntryPath, page) => {
    const callback = () => startServer(serverEntryPath, page)
    watch(serverEntryPath, callback)
}

const getAbsoluteServerEntryPath = (page, relativeServerEntryPath) => {
    const { path: pagePath } = page
    return PATH.resolve(pagePath, relativeServerEntryPath)
}


module.exports = function (page) {
    const relativeServerEntryPath = getNodeConfigServerEntryContainStartAndEndByPage(page)
    const absoluteServerEntryPath = getAbsoluteServerEntryPath(page, relativeServerEntryPath)

    try {
        resetWatcher(absoluteServerEntryPath)
        watchAndServer(absoluteServerEntryPath, page)
    } catch (e) {

    }
}