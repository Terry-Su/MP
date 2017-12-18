const PATH = require('path')




/**
 * node config of every page
 */
const structure = {
    getWebpack() {
        return {
    
        }
      },
    getHtml() {
    return {
        name: '',
        content: '',
        relativePath: '',
    }
    },
    relativePathsToOutput: '',
    outputPath: '', 
    // server.js: `module.exports = { start() {}, end() {} }`
    serverEntryContainStartAndEnd: '',
}
const config = {

}


module.exports = config
