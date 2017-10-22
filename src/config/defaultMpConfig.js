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
  shouldWatchMpConfig: true,
  shouldWatchNodeConfig: true,
  shouldWatchFile: true,
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
  shouldRemoveExtraFilesInPublic: false,  
}


module.exports = config
