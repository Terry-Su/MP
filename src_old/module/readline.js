const readMultipleLines = require('readline-multiple')


const getItemsByDataOfReadMultipleLines = dataOfReadMultipleLines => {
    let items = []
    let isAll = false
    dataOfReadMultipleLines.map(info => {
        const { pressKey, value } = info

        const isCurrenPressKey0 = pressKey === '0'
        if (isCurrenPressKey0) {
            isAll = true
            items = value
        }

        if (!isAll) {
            items.push(value)
        }
    })

    return items
}

const existReadCommands = () => {
    return Config.readlineCommands && readlineCommands.length > 0
}


let self

const readline = {
    showProjectsToChooseTitle() {
        console.log(`\n\n${Chalk.bold(`Choose project(s):`)}  (eg. single: '1' or multiple: '1 2')\n`)
    },
    showPagesToChooseTitle() {
        console.log(`\n\n${Chalk.bold(`Choose page(s):`)}  (eg. single: '1' or multiple: '1 2')\n`)
    },
    /**
     * @returns {Array} projectInfos [ { project: { name: '', path: '' }, pages: [ { name: '', path: '' } ] } ]
     */
    readlinesOfProjects() {
        let projectInfos

        const getDataValue = data => data.value
        const getParamsForReadMultipleLines = projects => {
            let params = []

            const allProjectInfos = Object.assign([], projects)
            allProjectInfos.isAll = true

            params.push({
                pressKey: '0',
                display: 'All',
                value: allProjectInfos,
            })

            allProjectInfos.map((projectInfo, index) => {
                const projectName = projectInfo.project.name

                params.push({
                    pressKey: '' + (index + 1),
                    display: projectName,
                    value: projectInfo
                })
            })

            return params
        }
        const getProjectInfosByDataOfReadMultipleLines = getItemsByDataOfReadMultipleLines

        const { projects } = getReduxState()

        const paramsForReadMultipleLines = getParamsForReadMultipleLines(projects)

        const dataOfReadMultipleLines = readMultipleLines(paramsForReadMultipleLines).then(data => data)
        projectInfos = getProjectInfosByDataOfReadMultipleLines(dataOfReadMultipleLines)

        return projectInfos
    },
    /**
     * @returns {Array} [ { name: '', path: '', parent: { name: '', path; '' } } ]
     */
    readlinesOfPages(projectInfo) {
        const getParamsForReadMultipleLines = projectInfo => {
            let params = []

            const allPages = projectInfo.pages

            params.push({
                pressKey: '0',
                display: 'All',
                value: allPages,
            })

            allPages.map((page, index) => {
                const pageName = page.name

                params.push({
                    pressKey: '' + (index + 1),
                    display: pageName,
                    value: page
                })
            })

            return params
        }
        const getPagesByDataOfReadMultipleLines = getItemsByDataOfReadMultipleLines
        const paramsForReadMultipleLines = getParamsForReadMultipleLines(projectInfo)
        const dataOfReadMultipleLines = readMultipleLines(paramsForReadMultipleLines).then(data => data)
        const pages = getPagesByDataOfReadMultipleLines(dataOfReadMultipleLines)
        return pages
    },
    /**
     * @returns {Array} [ { name: '', path: '', parent: { name: '', path; '' } } ]
     */
    getPagesByReadlineCommands() {
        let pages = []
        const { readlineCommands } = Config
        const { projects } = getReduxState()

        const hasAllProjectsCommand = projectCommands => projectCommands.includes('0')
        const hasAllPagesCommand = pageCommands => pageCommands.includes(0)
        const addPagesByReadlineCommands = (readlineCommands, projects) => {
            const projectCommands = Object.keys(readlineCommands)

            const addPagesByProjectCommand = projectCommand => {
                const projectIndex = +projectCommand - 1
                const project = projects[projectIndex]
                const { pages: thePages } = project

                const pageCommands = readlineCommands[projectCommand]

                if (hasAllPagesCommand(pageCommands)) {
                    pages = pages.concat(thePages)
                }

                if (!hasAllPagesCommand(pageCommands)) {
                    pageCommands.map(pageCommand => {
                        const pageIndex = +pageCommand - 1
                        const page = thePages[pageIndex]
                        pages.push(page)
                    })
                }
            }

            if (hasAllProjectsCommand(projectCommands)) {
                projects.map(project => {
                    const { pages: thePages } = project
                    pages = pages.concat(thePages)
                })

                return pages
            }

            if (!hasAllProjectsCommand(projectCommands)) {
                R.map(addPagesByProjectCommand, projectCommands)
            }
        }

        addPagesByReadlineCommands(readlineCommands, projects)

        return pages
    }
}

self = readline

module.exports = readline