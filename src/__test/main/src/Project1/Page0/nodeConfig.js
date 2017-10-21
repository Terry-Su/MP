const UglifyJSPlugin = require('uglifyjs-webpack-plugin')
const PATH = require('path')


module.exports = {
  // serverEntryContainStartAndEnd: PATH.resolve(__dirname, './server.js')
  html: {
    name: 'index.html',
    content: `
    test
`
  }
}
