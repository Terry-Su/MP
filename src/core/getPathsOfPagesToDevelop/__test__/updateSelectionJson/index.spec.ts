import * as FS from 'fs-extra'
import * as PATH from 'path'


import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'
import updateSelectionJson from '../../updateSelectionJson';
import { DOT_MP_CONFIG_JSON, DOT_MP_CONFIG } from '../../../../store/constant';



/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()



const root = PATH.resolve( __dirname, './root' )

const srcRoot1Path = PATH.resolve( __dirname, './root/srcRoot1' )
const srcRoot2Path = PATH.resolve( __dirname, './root/srcRoot2' )
const srcRoot3Path = PATH.resolve( __dirname, './root/srcRoot3' )

const selectionPath = PATH.resolve( root, `${ DOT_MP_CONFIG }/${ DOT_MP_CONFIG_JSON }` )
const selectionPathBefore = PATH.resolve( root, `${ DOT_MP_CONFIG }/selection_before.json` )

const paths = [
	srcRoot1Path,
	srcRoot2Path,
	srcRoot3Path,
]

describe(`UpdateSelectionJson: `, function () {
	it(`test: `, function () {
		changeProcessCwd(root)

		setSelectionJsonToBefore()

		updateSelectionJson( paths )

		recoverProcessCwd(originProcessCwdPath)
		// expect( pages ).toEqual( expected )
	})
})

function setSelectionJsonToBefore() {
	FS.copy( selectionPathBefore, selectionPath )
}
