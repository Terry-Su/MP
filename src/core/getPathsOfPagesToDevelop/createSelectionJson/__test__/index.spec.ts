import * as FS from 'fs-extra'
import * as PATH from 'path'

import createSelectionJson from '../index'
import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'
import { getSelectionJsonPath } from '../../../../store/index'
import { existJsonFile } from '../../../../util/index'

const root = PATH.resolve( __dirname, './root' )

const srcRoot1Path = PATH.resolve( __dirname, './root/srcRoot1' )
const srcRoot2Path = PATH.resolve( __dirname, './root/srcRoot2' )
const srcRoot3Path = PATH.resolve( __dirname, './root/srcRoot3' )

describe(`CreateSelectionJson: `, function () {
	it(`Is selection.json created: `, function () {
		let isSelectionJsonCreated: boolean

		/**
		 * Cache process.cwd() and recover it later
		 */
		const originProcessCwdPath = process.cwd()

		process.chdir( root )

		const selectionJsonPath: string = getSelectionJsonPath()

		removeSelectonJson( selectionJsonPath )

		createSelectionJson( [
			srcRoot1Path,
			srcRoot2Path,
			srcRoot3Path
		] )


		isSelectionJsonCreated = existJsonFile( selectionJsonPath )

		recoverProcessCwd( originProcessCwdPath )

		expect( isSelectionJsonCreated ).toBe( true )
	})
})

function removeSelectonJson( selectionJsonPath: string ) {
	FS.removeSync( selectionJsonPath )
}
