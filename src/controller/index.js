const Interface = require('../interface/index')

// mock data
const { mockPagesToDevelop } = require('../mock/forTest')

let isMock = true


module.exports = {
    init(interface) {
        let pagesToDevelop

        // [0]update and apply interface config
        Interface.updateInterface(interface)

        // ------ import after interface applied ------
        const exportGlobalVars = require('../global/exportGlobalVars.js')
        exportGlobalVars()
        
        const updateProjects = require('../fiber/updateProjects')
        const updatePagesInfoToDevelopByReadline = require('../fiber/updatePagesInfoToDevelopByReadline')
        const applyPage = require('../fiber/applyPage/index')
        const applyProject = require('../fiber/applyProject/index')
        const watchMpConfigOutputServerAndServerOutputPathIfNeeded = require('../fiber/watchMpConfigOutputServerAndServerOutputPathIfNeeded')
        // ------ import after interface applied ------

        // [1] update projects by mp.config
        updateProjects()

        // [2] build static folder in projects
        const { projects } = getReduxState()
        R.map(applyProject, projects)


        // [3] get pages info to develop
        if (!isMock) {
            updatePagesInfoToDevelopByReadline()
            pagesToDevelop = getReduxState().pagesToDevelop

        }
        if (isMock) {
            pagesToDevelop = mockPagesToDevelop
        }


        // [4] map each page - watch and build html, webpack's output files, files to copy (caveat: rebuild webpack if webpack's config is changed), load server by serverPath
        R.map(applyPage, pagesToDevelop)


        // [5] server output path if needed
        watchMpConfigOutputServerAndServerOutputPathIfNeeded()
    }
}
