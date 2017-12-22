const PATH = require( 'path' )
const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const tsProject = ts.createProject( "tsconfig.json" )
const rimraf = require( "rimraf" )
const sourcemaps = require( 'gulp-sourcemaps' )

const distPathStr = 'dist'
const distPath = PATH.resolve( __dirname, 'dist' )
const srcOtherFilesGlobs = [
	'src/**/*.json',
]
const watchingSrcGlob = 'src/**/*'

let watcher = undefined

function deleteDist() {
	return Promise.resolve( new Promise( ( resolve ) => {
		rimraf( distPath, () => {
			resolve()
		} )
	} ) )
}

function asyncMainTs() {
	return tsProject.src()
		.pipe( sourcemaps.init() )
		.pipe( tsProject() ).js
		.pipe( sourcemaps.write( '.', {
			sourceRoot: function( file ) {
					return file.cwd + '/src'
			}
		} ) )
		.pipe( gulp.dest( 'dist' ) )
}

function asyncMainOther() {
	return gulp.src( srcOtherFilesGlobs )
		.pipe( gulp.dest( distPathStr ) )
}

function main() {
	try {
		deleteDist().then( () => {
			asyncMainOther()
			asyncMainTs()
		} )
	} catch (e) {
		watcher.close()
		watcher = gulp.watch( watchingSrcGlob, main )
		throw e
	}

}

watcher = gulp.watch( watchingSrcGlob, main )

gulp.task( "default", () => {
	main()
} )



