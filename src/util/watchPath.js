const PATH = require('path')
const chokidar = require('chokidar')

/**
 * watchPath
 * * event type: 
 * - ready
 * - add
 * - change
 * - unlink
 * - addDir
 * - unlinkDir
 * - error
 */
module.exports = function (path, callback) {
  let watcher = chokidar.watch(path, {ignored: /(^|[\/\\])\../}).on('all', (event, path) => {
    callback(event, path)
  });

  return watcher
}