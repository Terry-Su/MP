import * as PATH from "path"

import getRootPath from './store/shared/getRootPath';
import getPathsOfPagesToDevelop from './core/getPathsOfPagesToDevelop/index'
import runWebpack from './core/runWebpack/index'
import serverOutput from './core/serverOutput/index'
import { MpConfigKey } from './store/constant'
import { getMpConfig } from './store/index';

const { SRC } = MpConfigKey


function mp(): void {
	const mpConfig: any = getMpConfig()
	let srcRoots = mpConfig[ SRC ]
	srcRoots = srcRoots.map( toAbsolute )

	// ****** Main step - Get paths of pages to develop ******
	getPathsOfPagesToDevelop( srcRoots ).then(
		( paths: string[] ) => {

			const toAbsolutePaths = paths.map( toAbsolute )

			// ****** Main step - Run webpack ******
			runWebpack( toAbsolutePaths )

			// ****** Main step - Copy files ******



			// ****** Main step - Server output ******
			serverOutput()
		}
	)

	function toAbsolute( relative: string ): string {
		const root = getRootPath()
		const res = PATH.resolve( root, `./${ relative }` )
		return res
	}

}

export default mp
module.exports = mp
