const initialStateOfRedux = require('./initialStateOfRedux')

module.exports = Object.assign(initialStateOfRedux, {
  mpConfigRelativePath: './mp.config.js',
  nodeConfigRelativePath: './nodeConfig.js',
  webpackEntryRelativePath: './entry.js',
  webpackOutputFileName: 'bundle.js',
  webpackOutputFolderRelativePath: './',
})