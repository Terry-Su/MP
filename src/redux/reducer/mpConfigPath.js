const { mpConfigPath: initialMpConfigPath } = require('../../store/initialState')


module.exports = function (state = initialMpConfigPath, action) {
    switch (action.type) {
        case 'UPDATE_MP_CONFIG_PATH':
            return action.value || initialMpConfigPath
        default:
            return state
    }
}