import * as PATH from "path"
import * as rimraf from "rimraf"

import core from '../../index'

import {
	changeProcessCwd,
	recoverProcessCwd
} from "../../util/test/index"

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000


const root = PATH.resolve( __dirname, "./root" )

/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

describe( `Instance: `, function() {

	beforeEach( done => {
		changeProcessCwd( root )

		core()

		// done()
	} )

	it( `Test: `, function( done ) {
		recoverProcessCwd( originProcessCwdPath )
		// expect().toBe()
		done()
	} )
} )

