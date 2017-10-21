const serverOutputPath = require('./serverOutputPath')
const watchMpConfigOutputServer = require('./watchMpConfigOutputServer')


module.exports = function () {
    let bs = serverOutputPath()
    
    const callback = () => {
        bs.exit()
        bs = serverOutputPath()
    }
    watchMpConfigOutputServer(callback)
}