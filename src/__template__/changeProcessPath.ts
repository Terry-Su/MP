import * as PATH from "path"
import * as rimraf from "rimraf"

import {
	changeProcessCwd,
	recoverProcessCwd
} from "../util/test/index"


const root = PATH.resolve( __dirname, "./root" )

/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

describe( `GetPathsOfPagesToDevelop`, function() {
	changeProcessCwd( root )

	it( `Test: `, function( done ) {
		recoverProcessCwd( originProcessCwdPath )

		// expect().toBe()
	} )
} )
