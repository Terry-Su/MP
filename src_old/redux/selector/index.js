const reduxStore = require('../index')


const selector = {
    getReduxState() {
        return reduxStore.getState()
    },
    getMpConfigPath() {
        return reduxStore.getState().mpConfigPath
    }
}

module.exports = selector