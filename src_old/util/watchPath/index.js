const FS = require( "fs" )
const PATH = require( "path" )

const basicWatch = require( "./basicWatch" )
const checkPathExist = require( "./util/checkPathExist" )

module.exports = function( path, callback ) {
	let watcher
	let isRestarted = false

	const checkPathRootPath = pathToCheck => path === pathToCheck

	const watch = ( tryRestartWatch, path, callback ) => {
		const tryRestartWatchIfNeeded = path => {
			if ( !isRestarted ) {
				if ( checkPathRootPath( path ) ) {
					const notExistPath = !checkPathExist( path )

					if ( notExistPath ) {
						isRestarted = true
						tryRestartWatch( watch, path, callback )
					}
				}
			}
		}

		watcher = basicWatch( path, callback )
			.on( "unlink", path => {
				tryRestartWatchIfNeeded( path )
			} )
			.on( "unlinkDir", path => {
				tryRestartWatchIfNeeded( path )
			} )
	}

	const tryRestartWatch = ( watch, path, callback, interval = 1000 ) => {
		let intervalTimer
		const watchIfPathExist = () => {
			const existPath = checkPathExist( path )
			if ( existPath ) {
				console.log( "Path occur" )
				watcher.close()
				watch( tryRestartWatch, path, callback )
				isRestarted = false
				clearInterval( intervalTimer )
			} else {
				console.log( "Path do not exist" )
			}
		}

		intervalTimer = setInterval( watchIfPathExist, interval )
	}

	watch( tryRestartWatch, path, callback )
	return watcher
}
