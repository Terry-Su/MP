const PATH = require('path')
const browserSync = require("browser-sync")

const bs = browserSync.create()

const outputPath = PATH.resolve(__dirname, './public')


bs.init({
  server: {
    baseDir: outputPath,
    directory: true,
  },
  files: [`${outputPath}/**/*`],
  port: 3300,
  open: false
})
