const PATH = require('path')


const config = {
  openServerAutomatically: false,
  ignoredFolders: ['static', '__share'],
  srcPath: PATH.resolve(__dirname, './src'),
  outputPath: PATH.resolve(__dirname, './public'),
  // relativePathsToOutput: ['./static', 'toSyncFolder1'],
  // outputServer: {
  //   port: 3100,
  //   shouldWatch: true,
  //   shouldOpen: true,
  // },
  shouldWatchMpConfig: false,
  shouldWatchNodeConfig: false,
  shouldWatchFile: false,
  readlineCommands: {
    0: [0]
  },
}


module.exports = config