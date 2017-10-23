const PATH = require('path')


/**
 * Mp config
 */
const structure = {
  srcPath: '',
  outputPath: '',
  ignoredFolders: [],
  // sync file or folder to output path
  relativePathsToOutput: [],
  outputServer: {
    port: 3200,
    watch: true,
    open: true,
  },
  shouldWatchMpConfig: true,
  shouldWatchNodeConfig: true,
  shouldWatchFile: true,
  readlineCommands: {
    0: [0],
    1: [1, 2]
  },
}
const config = {
  srcPath: '',
  outputPath: '',
  ignoredFolders: [],
  // sync file or folder to output path
  relativePathsToOutput: [],
  shouldWatchMpConfig: true,
  shouldWatchNodeConfig: true,
  shouldWatchFile: true,
}


module.exports = config
