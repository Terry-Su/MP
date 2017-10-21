const browserSync = require("browser-sync")

module.exports = function () {
  const { outputPath, outputServer = {} } = Config
  const { port, shouldWatch, shouldOpen: open } = outputServer
  const bs = browserSync.create()  

  const shouldServer = port !== undefined && shouldWatch !== undefined

  shouldServer && bs.init({
    server: {
      baseDir: outputPath,
      directory: true,
    },
    files: shouldWatch ? [`${outputPath}/**`] : [],
    // files: `${outputPath}/index.html`,
    port,
    open
  })

  return bs
}