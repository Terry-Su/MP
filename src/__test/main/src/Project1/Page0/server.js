module.exports = {
    start( outputPagePath, page ) {
        console.log('server start!', outputPagePath, page)
    },
    end(outputPagePath, page) {
        console.log('server end!', outputPagePath, page)
    }

}