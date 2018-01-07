import * as PATH from 'path'

import checkProjectsWithNodeConfigChange from '../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'


/**
 * Cache process.cwd() for recover it
 */
const originProcessCwdPath = process.cwd()

const rootChanged = PATH.resolve( __dirname, './root_changed' )
const rootUnchanging = PATH.resolve( __dirname, './root_unchanging' )


describe(`CheckProjectsWithNodeConfigChange: `, function () {
	it(`Test changed root: `, function () {
		changeProcessCwd( rootChanged )

		const paths = [
			PATH.resolve( rootChanged, './srcRoot' )
		]
		const isChanged = checkProjectsWithNodeConfigChange( paths )

		recoverProcessCwd( originProcessCwdPath )

		expect( isChanged ).toEqual( true )
	})

	it(`Test unchanging root: `, function () {
		changeProcessCwd( rootUnchanging )

		const paths = [
			PATH.resolve( rootUnchanging, './srcRoot' )
		]
		const isChanged = checkProjectsWithNodeConfigChange( paths )

		recoverProcessCwd( originProcessCwdPath )

		expect( isChanged ).toEqual( false )
	})
})
