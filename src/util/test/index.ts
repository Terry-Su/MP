/**
 * Change process.cwd() for test
 */
export function changeProcessCwd( path: string ) {
	process.chdir( path )
}


/**
 * Recover process.cwd() with what was cached before
 */
export function recoverProcessCwd( originProcessCwdPath: string ) {
	process.chdir( originProcessCwdPath )
}
