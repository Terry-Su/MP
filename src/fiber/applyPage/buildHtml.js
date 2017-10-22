const getOutputPagePathByPage = require('../getOutputPagePathByPage')
const getNodeConfigHtmlByPage = require('../getNodeConfigHtmlByPage')

const logSuccess = path => {
    const fileName = PATH.basename(path)
    console.log(Chalk.green.bold('\n' + fileName + ' [generated]\n'))
}
const getOutputHtmlPath = (outputPagePath, htmlName) => PATH.resolve(outputPagePath, `./${htmlName}`)
const writeHtmlToPath = (content, path) => {
    FS.mkdirpSync(PATH.dirname(path))
    FS.writeFileSync(path, content)

    logSuccess(path)
}


module.exports = function (page) {
    const htmlConfig = getNodeConfigHtmlByPage(page)

    const { name: htmlName, content: htmlContent} = htmlConfig

    const shouldBuild = htmlContent !== undefined 

    if (shouldBuild) {
        const outputPagePath = getOutputPagePathByPage(page)
        const outputHtmlPath = getOutputHtmlPath(outputPagePath, htmlName || 'index.html')
        
        writeHtmlToPath(htmlContent || '', outputHtmlPath)
    }
}