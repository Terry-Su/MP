const getAbsolutePath = (itemPath, relativePath) => PATH.resolve(itemPath, relativePath)
const getAbsolutePathOutputPath = (outputItemPath, relativePath) => PATH.resolve(outputItemPath, relativePath)
const logSync = (path) => console.log(Chalk.green.bold(`${PATH.basename(path)} [Synced]`))
const copyAndLogIfAbsolutePathExist = (absolutePath, outputAbsolutePath) => {
    try {
        FS.copySync(absolutePath, outputAbsolutePath)
        logSync(absolutePath)        
    } catch (e) {

    }
}

const watchAndCopy = (absolutePath, outputAbsolutePath) => {
    let watcher

    if (watcher) {
        watcher.close()
    }

    const callback = ({ path, type, fileType }) => {
        const isReady = (type) => type === 'ready'
        const isFileChangedAndNotAbsolutePath = (type, path) => type === 'fileChanged' && path !== absolutePath
        const isFileAddedAndNotAbsolutePath = (type, path) => type === 'fileAdded' && path !== absolutePath
        const isFolderChangedAndNotAbsolutePath = (type, path) => type === 'folderChanged' && path !== absolutePath
        const isFolderAddedAndNotAbsolutePath = (type, path) => type === 'folderAdded' && path !== absolutePath
         
        const isReadyState = isReady(type)
        const isFileChangedAndNotAbsolutePathState = isFileChangedAndNotAbsolutePath(type, path)
        const isFileAddedAndNotAbsolutePathState = isFileAddedAndNotAbsolutePath(type, path)
        const isFolderChangedAndNotAbsolutePathState = isFolderChangedAndNotAbsolutePath(type, path)
        const isFolderAddedAndNotAbsolutePathState = isFolderAddedAndNotAbsolutePath(type, path)
        const shouldCopy = isReadyState || isFileChangedAndNotAbsolutePathState || isFileAddedAndNotAbsolutePathState || isFolderChangedAndNotAbsolutePathState || isFolderAddedAndNotAbsolutePathState

        if (shouldCopy) {
            copyAndLogIfAbsolutePathExist(absolutePath, outputAbsolutePath)
        }
    }
    
    watcher = Util.watchPath(absolutePath, callback)
}

module.exports = function (getOutputItemPathByItem, relativePath, item) {
    const { path: itemPath } = item

    const outputItemPath = getOutputItemPathByItem(item)

    const absolutePath = getAbsolutePath(itemPath, relativePath)
    const outputAbsolutePath = getAbsolutePathOutputPath(outputItemPath, relativePath)

    // const copyPathToOutputIfPathExisted = (absolutePath, outputAbsolutePath) => {
    //     // check if path existed
    //     const existAbsolutePath = Util.checkPathExists(absolutePath)

    //     if (existAbsolutePath) {
    //         watchAndCopy(absolutePath, outputAbsolutePath)
    //     }
    // }

    watchAndCopy(absolutePath, outputAbsolutePath)
}