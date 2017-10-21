const PATH = require('path')


/**
 * Mp config
 */
const structure = {
  webpack: {

  },
  html: {
    name: '',
    content: '',
    relativePath: '',
  },
  srcPath: '',
  outputPath: '',
  shouldRemoveExtraFilesInPublic: false,
  ignoredFolders: [],
  // sync file or folder to output path
  relativePathsToOutput: [],
  outputServer: {
    port: 3200,
    shouldWatch: true,
    shouldOpen: true,
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
