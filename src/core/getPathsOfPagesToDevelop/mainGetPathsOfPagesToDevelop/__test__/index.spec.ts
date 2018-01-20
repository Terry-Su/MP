import * as PATH from 'path'

import mainGetPathsOfPagesToDevelop from '../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'



/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

const root = PATH.resolve( __dirname, './root' )

describe(`mainGetPathsOfPagesToDevelop: `, function () {
	it(`test: `, function () {
		changeProcessCwd( root )

		const pages = mainGetPathsOfPagesToDevelop()
		recoverProcessCwd( originProcessCwdPath )
		// expect().toBe()
	})
})
