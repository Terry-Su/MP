const { combineReducers } = require('redux')
const projects = require('./projects')
const pagesToDevelop = require('./pagesToDevelop')
const mpConfigPath = require('./mpConfigPath')



module.exports = combineReducers({
    projects,
    pagesToDevelop,
    mpConfigPath,
})