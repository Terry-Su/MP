const PATH = require('path')
const initialStateOfRedux = require('./initialStateOfRedux')

module.exports = Object.assign(initialStateOfRedux, {
  mpConfigPath: PATH.resolve(process.cwd(), './mp.config.js'),
  nodeConfigRelativePath: './nodeConfig.js',
  webpackEntryRelativePath: './entry.js',
  webpackOutputFileName: 'bundle.js',
  webpackOutputFolderRelativePath: './',
})