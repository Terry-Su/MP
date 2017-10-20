const getNodeConfigServerEntryContainStartAndEndByPage = require('../getNodeConfigServerEntryContainStartAndEndByPage')


const saveWatcher = (watcher, absolutePath) => Watcher.save(absolutePath, watcher)
const resetWatcher = absolutePath => Watcher.reset(absolutePath)

const startServer = (serverEntryPath) => {
    try {
        const server = require(serverEntryPath)
        Util.cleanRequreCache(serverEntryPath)
        
        server.end()
        server.start()


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

const watchAndCopy = (serverEntryPath) => {
    const callback = () => startServer(serverEntryPath)
    watch(serverEntryPath, callback)
}


module.exports = function (page) {
    const serverEntryPath = getNodeConfigServerEntryContainStartAndEndByPage(page)

    try {
        resetWatcher(serverEntryPath)
        watchAndCopy(serverEntryPath)
    } catch (e) {

    }
}