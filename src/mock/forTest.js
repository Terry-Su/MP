const PATH = require('path')

module.exports = {
    mockPagesToDevelop: [
        {
            name: 'Page0',
            path: PATH.resolve(__dirname, '../__test/main/src/Project1/Page0'),
            parentProject:{ 
                name: "Project1",
                path:  PATH.resolve(__dirname, '../__test/main/src/Project1')
            }
        },
    ]
}