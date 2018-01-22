import { changeProcessCwd, recoverProcessCwd } from "../../../../util/test/index";

/**
 * Cache process.cwd() and recover it later
 */
const originProcessCwdPath = process.cwd()

const root = PATH.resolve( __dirname, './root' )


describe(`RunWebpack: `, function () {
	it(`test: `, function () {
		changeProcessCwd(root)

		recoverProcessCwd(originProcessCwdPath)
		// expect( pages ).toEqual( expected )
	})
})
