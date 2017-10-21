const PATH = require('path')


/**
 * Mp config
 */
const structure = {
  srcPath: '',
  outputPath: '',
  shouldRemoveExtraFilesInPublic: false,
  ignoredFolders: [],
  // sync file or folder to output path
  relativePathsToOutput: [],
  outputServer: {
    port: 3200,
    shouldWatch: true,
    open: true,
  },
  openServerAutomatically: false,
}
const config = {
  srcPath: '',
  outputPath: '',
  shouldRemoveExtraFilesInPublic: false,
  ignoredFolders: [],
  // sync file or folder to output path
  relativePathsToOutput: [],
  openServerAutomatically: false,
}


module.exports = config
