const PATH = require('path')

module.exports = {
    mockPagesToDevelop: [
        {
            name: 'Page',
            path: PATH.resolve(__dirname, '../__test/main/src/WebpackProject/Page'),
            parentProject:{ 
                name: "WebpackProject",
                path:  PATH.resolve(__dirname, '../__test/main/src/WebpackProject')
            }
        },
    ]
}