import * as PATH from 'path'
import checkSelectionJsonExist from '../../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../../util/test/index'


const root = __dirname

describe(`CheckSelectionJson - exist selection json: `, function () {
	it(`Test in rootFolder_has_selectionJson`, function () {
		/**
		 * Cache process.cwd() for recover it
		 */
		const originProcessCwdPath = process.cwd()

		process.chdir( root )

		const cachedResult = checkSelectionJsonExist()

		recoverProcessCwd( originProcessCwdPath )

		expect( cachedResult ).toBe( true )
	})
})

