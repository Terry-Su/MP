const { ADD_PAGES_TO_PAGES_TO_DEVELOP } = require('../module/main')


const isAllProjects = (projectInfos) => {
    const { projects: allProjects } = getReduxState()
    return Util.equalPlainObjects(allProjects, projectInfos) && projectInfos.isAll
}

const updatePagesInfoIfIsAllProjects = (projectInfos) => {
    if (isAllProjects(projectInfos)) {
        const updatePagesToDevelop = projectInfo => {
            const { pages } = projectInfo
            ADD_PAGES_TO_PAGES_TO_DEVELOP(pages)
        }

        R.map(updatePagesToDevelop, projectInfos)
    }
}

const updatePagesInfoIfIsNotAllProjects = (projectInfos) => {
    if (!isAllProjects(projectInfos)) {

        const updatePagesToDevelop = projectInfo => {
            Readline.showPagesToChooseTitle()
    
            const pages = Readline.readlinesOfPages(projectInfo)
            ADD_PAGES_TO_PAGES_TO_DEVELOP(pages)
        }

        R.map(updatePagesToDevelop, projectInfos)
    }
}

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
    // show projects to choose
    Readline.showProjectsToChooseTitle()
    const projectInfos = Readline.readlinesOfProjects()

    // update pages
    updatePagesInfoIfIsAllProjects(projectInfos)
    updatePagesInfoIfIsNotAllProjects(projectInfos)
}