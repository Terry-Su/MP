import * as PATH from 'path'

import getCurrentSelectionJson from '../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'


/**
 * Cache process.cwd() for recover it
 */
const originProcessCwdPath = process.cwd()

const root = PATH.resolve( __dirname, './root' )

const originSelectionJson: any = [
	{
		"a": 123
	}
]

describe(`GetCurrentSelectionJson: `, function () {
	it(`Test: `, function () {
		changeProcessCwd( root )

		const currentSelectionJson = getCurrentSelectionJson()

		recoverProcessCwd( originProcessCwdPath )

		expect( currentSelectionJson ).toEqual( originSelectionJson )
	})
})
