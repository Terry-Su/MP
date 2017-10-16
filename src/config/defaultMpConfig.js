const PATH = require('path')


const config = {
  srcPath: '',
  outputPath: '',
  shouldRemoveExtraFilesInPublic : false,

  ignoredFolders: ['shared', 'static'],
  // sync file or folder to output path
  relativePathsToOutput: ['./static', './toSyncFile1', './toSyncFolder1'],
  
  openServerAutomatically: false,

}


module.exports = config
