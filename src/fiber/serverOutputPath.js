const browserSync = require("browser-sync")
const { isPlainObject, isBoolean } = require("lodash")


module.exports = function () {
  let port
  let shouldWatch = true
  let shouldOpen = true
  let shouldServer = false

  const bs = browserSync.create()
  const { outputPath, outputServer } = Config

  if (isPlainObject(outputServer)) {
    port = outputServer.port
    shouldWatch = outputServer.watch === undefined ? shouldWatch: outputServer.watch
    shouldOpen = outputServer.open === undefined ? shouldOpen: outputServer.open

    shouldServer = true
  }

  if (isBoolean(outputServer)) {
    shouldServer = outputServer
  }

  if (shouldServer) {
    let serverconfig = {
      server: {
        baseDir: outputPath,
        directory: true,
      },
      files: shouldWatch ? [`${outputPath}/**`] : [],
      open: shouldOpen,
    }
  
    serverconfig = Object.assign(serverconfig, port ? { port } : {})

    bs.init(serverconfig)
  }

  return bs
}