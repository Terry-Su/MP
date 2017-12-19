const PATH = require( 'path' )
const gulp = require( "gulp" )
const ts = require( "gulp-typescript" )
const tsProject = ts.createProject( "tsconfig.json" )
const rimraf = require( "rimraf" )

const distPath = PATH.resolve( __dirname, './dist' )
const watchingSrcPathStr = 'src/**/*'

function deleteDist( callback ) {
	return rimraf( distPath, callback )
}

function main() {
	deleteDist( () => {
		tsProject.src()
			.pipe( tsProject() )
			.js.pipe( gulp.dest( "dist" ) )
	} )

}

gulp.task( "default", () => {
	main()
} )

gulp.watch( watchingSrcPathStr, main )

