const PATH = require('path')
const chokidar = require('chokidar')

const log = console.log.bind(console)


/**
 * watchPath
 * * event type: * 
 * - fileAdded
 * - fileChanged
 * - fileRemoved
 * - folderChanged
 * - folderRemoved
 * - error
 */
module.exports = function (path, callback) {
  // paramaters for callback
  let param = {
    type: null,
    fileType: null,
    path: null
  }

  const watcher = chokidar.watch(path, {
    persistent: true
  })

  watcher
    .on('raw', (event, path, details) => { param = Object.assign(param, details, { type: details.event, fileType: details.type });  })
    .on('add', path => { param = Object.assign(param, { type: 'fileAdded' }); callback(param) })
    .on('change', path => { param = Object.assign(param, { type: 'fileChanged' }); callback(param) })
    .on('unlink', path => { param = Object.assign(param, { type: 'fileRemoved' }); callback(param) })
    .on('addDir', path => { param = Object.assign(param, { type: 'folderAdded' }); callback(param) })
    .on('unlinkDir', path => { param = Object.assign(param, { type: 'folderRemoved' }); callback(param) })
    .on('error', error => { param = Object.assign(param, { type: 'error' }); callback(param) })
    .on('ready', error => { param = Object.assign(param, { type: 'ready' }); callback(param) })


  return watcher
}