const browserSync = require("browser-sync")
let bs = browserSync.create() 

module.exports = {
    start( outputPagePath, page ) {
        bs.init({
            server: {
                baseDir: outputPagePath,
                directory: true,
            },
            files: `${outputPagePath}/**`,
            port: 3200,
            ui: false,
        })
    },
    end(outputPagePath, page) {
        bs.exit()
        console.log('Server end!')
    }

}