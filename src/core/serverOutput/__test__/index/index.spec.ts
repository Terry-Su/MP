import * as PATH from "path"
import * as rimraf from "rimraf"

import {
	changeProcessCwd,
	recoverProcessCwd
} from "../../../../util/test/index"
import serverOutput from '../../index'
import log from '../../../../util/log';

const root = __dirname

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()


describe( `ServerOutput: `, function() {

	beforeEach( done => {
		changeProcessCwd( root )


		serverOutput()

		recoverProcessCwd( originProcessCwdPath )

	} )

	it( `Test: `, function( done ) {
		done()
	} )
} )

