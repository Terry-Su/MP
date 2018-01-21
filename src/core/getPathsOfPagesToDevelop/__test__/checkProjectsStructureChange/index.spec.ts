import * as PATH from 'path'

import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'
import checkProjectsStructureChange from '../../checkProjectsStructureChange';


/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

const rootChanged = PATH.resolve( __dirname, './root_changed' )
const rootUnchanging = PATH.resolve( __dirname, './root_unchanging' )


describe(`CheckProjectsStructureChange: `, function () {
	it(`Test changed root: `, function () {
		changeProcessCwd( rootChanged )

		const paths = [
			PATH.resolve( rootChanged, './srcRoot' )
		]
		const isChanged = checkProjectsStructureChange( paths )

		recoverProcessCwd( originProcessCwdPath )

		expect( isChanged ).toEqual( true )
	})

	it(`Test unchanging root: `, function () {
		changeProcessCwd( rootUnchanging )

		const paths = [
			PATH.resolve( rootUnchanging, './srcRoot' )
		]
		const isChanged = checkProjectsStructureChange( paths )

		recoverProcessCwd( originProcessCwdPath )

		expect( isChanged ).toEqual( false )
	})
})
