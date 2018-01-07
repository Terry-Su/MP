import * as PATH from 'path'

import getPathsOfPagesToDevelop from '../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../util/test/index'


/**
 * Cache process.cwd() for recover it
 */
const originProcessCwdPath = process.cwd()

const root = PATH.resolve( __dirname, './root' )
const srcRoot1 = PATH.resolve( __dirname, './root/srcRoot1' )
const srcRoot2 = PATH.resolve( __dirname, './root/srcRoot2' )

const enableInteraction = false

describe(`GetPathsOfPagesToDevelop`, function () {
	it(`Test: `, function () {
		const paths = [
			srcRoot1,
			srcRoot2
		]

		changeProcessCwd( root )

		// const pathsOfPagesToDevelop = getPathsOfPagesToDevelop( paths )

		recoverProcessCwd( originProcessCwdPath )

		// expect().toBe()
	})
})
