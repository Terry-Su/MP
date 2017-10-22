const { ADD_PAGES_TO_PAGES_TO_DEVELOP } = require('../module/main')

/**
 * get pages info to develop by reading lines
 * [
 *     {
 *         name: '',
 *         path: ''
 *         parentProject: {
 *             name: '',
 *             path: ''
 *         }
 *     }
 * ]
 * 
 */
module.exports = function () {
    const pages = Readline.getPagesByReadlineCommands()
    ADD_PAGES_TO_PAGES_TO_DEVELOP(pages)
}