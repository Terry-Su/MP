import * as PATH from "path"
import * as rimraf from "rimraf"

import getPathsOfPagesToDevelop from "../../index"
import {
	changeProcessCwd,
	recoverProcessCwd
} from "../../../../util/test/index"
import { DOT_MP_CONFIG } from "../../../../store/constant"

/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

const root = PATH.resolve( __dirname, "./root" )
const srcRoot1 = PATH.resolve( __dirname, "./root/srcRoot1" )
const srcRoot2 = PATH.resolve( __dirname, "./root/srcRoot2" )

const DotMpConfigPath = PATH.resolve( root, DOT_MP_CONFIG )

const enableInteraction = true
const shouldRemoveDotMpConfigFolder = false

describe( `GetPathsOfPagesToDevelop`, function() {
	let pathsOfPagesToDevelop: string[]

	const rootPaths = [ srcRoot1, srcRoot2 ]

	beforeEach( done => {
		changeProcessCwd( root )

		console.log( `\n` )

		shouldRemoveDotMpConfigFolder && removeDotMpConfigFolder()

		if ( enableInteraction ) {
			getPathsOfPagesToDevelop( rootPaths ).then( ( paths: string[] ) => {
				console.log( paths )
				done()
			} )
		}

		!enableInteraction && done()
	} )

	it( `Test: `, function( done ) {
		// expect().toBe()

		recoverProcessCwd( originProcessCwdPath )

		// done()
	} )
} )

function removeDotMpConfigFolder() {
	return rimraf.sync( DotMpConfigPath )
}
