const getAbsolutePath = (itemPath, relativePath) => PATH.resolve(itemPath, relativePath)
const getAbsolutePathOutputPath = (outputItemPath, relativePath) => PATH.resolve(outputItemPath, relativePath)
const logSync = (path) => console.log(Chalk.green.bold(`${PATH.basename(path)} [Copied]`))
const copyAndLogIfAbsolutePathExist = (absolutePath, outputAbsolutePath) => {
    try {
        FS.copySync(absolutePath, outputAbsolutePath)
        logSync(absolutePath)        
    } catch (e) {

    }
}

const saveWatcher = (watcher, absolutePath) => Watcher.save(absolutePath, watcher)

const resetWatcher = absolutePath => Watcher.reset(absolutePath)

const watchAndCopy = (absolutePath, outputAbsolutePath) => {
    let watcher

    const callback = (event, path) => {
        const isReady = (event) => event === 'ready'
        const isFileChangedAndNotAbsolutePath = (event, path) => event === 'change' && path !== absolutePath
        const isFileAddedAndNotAbsolutePath = (event, path) => event === 'add' && path !== absolutePath
        const isFolderAddedAndNotAbsolutePath = (event, path) => event === 'folderAdded' && path !== absolutePath
         
        const isReadyState = isReady(event)
        const isFileChangedAndNotAbsolutePathState = isFileChangedAndNotAbsolutePath(event, path)
        const isFileAddedAndNotAbsolutePathState = isFileAddedAndNotAbsolutePath(event, path)
        const isFolderAddedAndNotAbsolutePathState = isFolderAddedAndNotAbsolutePath(event, path)
        const shouldCopy = isReadyState || isFileChangedAndNotAbsolutePathState || isFileAddedAndNotAbsolutePathState  || isFolderAddedAndNotAbsolutePathState

        if (shouldCopy) {
            copyAndLogIfAbsolutePathExist(absolutePath, outputAbsolutePath)
        }
    }
    
    watcher = Util.watchPath(absolutePath, callback)

    saveWatcher(watcher, absolutePath)
}

module.exports = function (getOutputItemPathByItem, relativePath, item) {
    const { path: itemPath } = item

    const outputItemPath = getOutputItemPathByItem(item)

    const absolutePath = getAbsolutePath(itemPath, relativePath)
    const outputAbsolutePath = getAbsolutePathOutputPath(outputItemPath, relativePath)

    resetWatcher(absolutePath)
    watchAndCopy(absolutePath, outputAbsolutePath)
}