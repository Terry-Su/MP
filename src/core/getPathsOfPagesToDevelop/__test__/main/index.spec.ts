import * as PATH from 'path'

import main from '../../main'
import { changeProcessCwd, recoverProcessCwd } from '../../../../util/test/index'



/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()


const expected = [
	"srcRoot1/level1Folder1/level1Folder2/folderWithNodeConfig",
	"srcRoot1",
	"srcRoot1/level1Folder1/folderWithNodeConfig",
	"srcRoot1/level1Folder1/level1Folder2",
	"srcRoot1/level1Folder1",
	"srcRoot2/level1Folder1/folderWithNodeConfig"
]
const root = PATH.resolve(__dirname, './root')

describe(`main: `, function () {
	it(`test: `, function () {
		changeProcessCwd(root)

		const pages = main()

		recoverProcessCwd(originProcessCwdPath)
		expect( pages ).toEqual( expected )
	})
})
