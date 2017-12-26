import * as PATH from 'path'
import checkSelectionJson from '../../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../../util/test/index'

// Cache process.cwd() for recover it
const originProcessCwdPath = process.cwd()


describe(`CheckSelectionJson - exist selection json: `, function () {
	it(`Test in rootFolder_has_selectionJson`, function () {
		const root = __dirname
		process.chdir( root )
		const cachedResult = checkSelectionJson()
		recoverProcessCwd( originProcessCwdPath )
		expect( cachedResult ).toBe( true )
	})
})

