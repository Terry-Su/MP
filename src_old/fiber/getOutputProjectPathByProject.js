const getOutputProjectPath = (outputPath, projectName) => {
    return PATH.resolve(outputPath, `./${projectName}`)
}

module.exports = function (project) {
    let path

    const { name: projectName } = project

    const { outputPath } = Config
    
    path = getOutputProjectPath(outputPath, projectName)
    
    return path
}