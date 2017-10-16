const getOutputPagePathByPageByParams = (outputPath, projectName, pageName) => {
    return PATH.resolve(outputPath, `./${projectName}/${pageName}`)
}

module.exports = function (page) {
    let path

    const { name: pageName, parentProject } = page
    const { name: projectName } = parentProject

    const { outputPath } = Config
    
    path = getOutputPagePathByPageByParams(outputPath, projectName, pageName)
    return path
}