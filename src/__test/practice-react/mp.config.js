const PATH = require('path')


const config = {
  srcPath: PATH.resolve(__dirname, './src'),
  outputPath: PATH.resolve(__dirname, './output'),
  readlineCommands: {
    1: [1]
  },
}


module.exports = config