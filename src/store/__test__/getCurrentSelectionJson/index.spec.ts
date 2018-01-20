import * as PATH from 'path'

import { getSelection } from '../../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../util/test/index'


/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

const root = PATH.resolve( __dirname, './root' )

const originSelection: any = [
	{
		"a": false
	}
]


describe(`GetSelection: `, function () {
	it(`Test: `, function () {
		changeProcessCwd( root )

		const selection = getSelection()

		recoverProcessCwd( originProcessCwdPath )

		expect( selection ).toEqual( originSelection )
	})
})
