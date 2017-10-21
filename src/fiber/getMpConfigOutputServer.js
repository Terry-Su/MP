module.exports = function (page) {
    Config.refreshConfig()
    try {
        return Config.outputServer
    } catch (e) {
        return undefined
    }
    
}