import * as FS from 'fs-extra'

import { getOuterMpConfigPath } from "../store/index";
import { existFile } from "../util/index";
import { OuterMpConfig } from '../interface/index';
import { initialOuterMpConfig } from '../store/initialState';


export default function () {
	const outerMpConfigPath = getOuterMpConfigPath()

	const initialString: string = getOuterMpConfigInitialString()

	FS.outputFileSync( outerMpConfigPath, initialString )
}

function getOuterMpConfigInitialString(): string {
	const json = initialOuterMpConfig
	const res = `
	module.export = ${
		JSON.stringify( json )
	}
`
	return res
}

