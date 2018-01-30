import * as PATH from "path"
import {
	changeProcessCwd,
	recoverProcessCwd
} from "../../../../util/test/index"
import runWebpack from "../../index"

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const pathWithWebpackConfig = PATH.resolve( __dirname, "withWebpackConfig" )
const pathWithWebpackConfigPath = PATH.resolve(
	__dirname,
	"withWebpackConfigPath"
)
const pathDisableUseWebpack = PATH.resolve( __dirname, "disableUseWebpack" )
const pathWithoutNodeConfig = PATH.resolve( __dirname, "withoutNodeConfig" )

describe( `RunWebpack: `, function() {
	beforeEach( done => {
		runWebpack( [ pathWithWebpackConfigPath ] )

		setTimeout( () => {
			done()
		}, jasmine.DEFAULT_TIMEOUT_INTERVAL )
	} )

	it( `test: `, function( done ) {
		// expect(  ).toEqual(  )
		done()
	} )
} )
