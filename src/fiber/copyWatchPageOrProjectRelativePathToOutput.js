const getAbsolutePath = (itemPath, relativePath) => PATH.resolve(itemPath, relativePath)
const getAbsolutePathOutputPath = (outputItemPath, relativePath) => PATH.resolve(outputItemPath, relativePath)
const logSync = (absolutePath) => console.log(Chalk.green.bold(`${PATH.basename(absolutePath)} [Synced]`))

module.exports = function (getOutputItemPathByItem, relativePath, item) {
    const { path: itemPath } = item
    
    const outputItemPath = getOutputItemPathByItem(item)

    const absolutePath = getAbsolutePath(itemPath, relativePath)
    const outputAbsolutePath = getAbsolutePathOutputPath(outputItemPath, relativePath)

    const copyPathToOutputIfPathExisted = (absolutePath, outputAbsolutePath) => {
        // check if path existed
        const existAbsolutePath = Util.checkPathExists(absolutePath)

        if (existAbsolutePath) {
            FS.copySync(absolutePath, outputAbsolutePath)
            logSync(absolutePath)
        }
    }
    
    copyPathToOutputIfPathExisted(absolutePath, outputAbsolutePath)
}