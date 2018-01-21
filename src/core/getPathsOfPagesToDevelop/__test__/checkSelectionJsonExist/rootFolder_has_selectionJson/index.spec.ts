import * as PATH from 'path'
import { changeProcessCwd, recoverProcessCwd } from '../../../../../util/test/index'
import checkSelectionJsonExist from '../../../checkSelectionJsonExist';


const root = __dirname

describe(`CheckSelectionJson - exist selection json: `, function () {
	it(`Test in rootFolder_has_selectionJson`, function () {
		/**
		 * Cache process.cwd() and recover it later
		 */
		const originProcessCwdPath = process.cwd()

		process.chdir( root )

		const cachedResult = checkSelectionJsonExist()

		recoverProcessCwd( originProcessCwdPath )

		expect( cachedResult ).toBe( true )
	})
})

