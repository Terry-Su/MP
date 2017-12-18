const watchMpConfigOutputServerAndServerOutputPath = require('./watchMpConfigOutputServerAndServerOutputPath')
const getMpConfigOutputServer= require('./getMpConfigOutputServer')


module.exports = function () {
    const outputServer = getMpConfigOutputServer()
    const existOutputServer = outputServer !== undefined 

    if (existOutputServer ) {
        watchMpConfigOutputServerAndServerOutputPath()
    }
}