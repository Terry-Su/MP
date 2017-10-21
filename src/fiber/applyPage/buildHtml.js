const getOutputPagePathByPage = require('../getOutputPagePathByPage')
const getNodeConfigHtmlByPage = require('../getNodeConfigHtmlByPage')

const logSuccess = path => {
    const fileName = PATH.basename(path)
    console.log(Chalk.green.bold('\n' + fileName + ' [generated]\n'))
}
const getHtmlContentByRelativeHtmlPath = (page, relativeHtmlPath) => {
    const { path: pagePath } = page
    const htmlPath = PATH.resolve(pagePath, relativeHtmlPath)

    try {
        return FS.readFileSync(htmlPath, {encoding: 'utf8'})
    } catch (e) {
        console.log(e)
        return ''
    }
}
const getOutputHtmlPath = (outputPagePath, htmlName) => PATH.resolve(outputPagePath, `./${htmlName}`)
const writeHtmlToPath = (content, path) => {
    FS.mkdirpSync(PATH.dirname(path))
    FS.writeFileSync(path, content)

    logSuccess(path)
}
const getPathBaseName = path => PATH.basename(path)

module.exports = function (page) {
    let htmlContent    
    const htmlConfig = getNodeConfigHtmlByPage(page)

    const { name: htmlName, content: possibleHtmlContent, relativePath: relativeHtmlPath } = htmlConfig

    const shouldBuild = possibleHtmlContent !== undefined || relativeHtmlPath !== undefined

    if (shouldBuild) {
        const outputPagePath = getOutputPagePathByPage(page)
        const outputHtmlPath = getOutputHtmlPath(outputPagePath, htmlName || (relativeHtmlPath ? getPathBaseName(relativeHtmlPath) : 'index.html'))
        
        htmlContent = relativeHtmlPath ? (getHtmlContentByRelativeHtmlPath(page, relativeHtmlPath) || possibleHtmlContent) : possibleHtmlContent        

        writeHtmlToPath(htmlContent || '', outputHtmlPath)
    }
}