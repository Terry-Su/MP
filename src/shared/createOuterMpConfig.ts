import * as FS from 'fs-extra'

import { getOuterMpConfigPath } from "../store/index"
import { existFile } from "../util/index"
import { OuterMpConfig } from '../interface/index'
import { defaultOuterMpConfig } from '../store/initialState'


export default function () {
	const outerMpConfigPath = getOuterMpConfigPath()

	const initialString: string = getOuterMpConfigInitialString()

	FS.outputFileSync( outerMpConfigPath, initialString )
}

function getOuterMpConfigInitialString(): string {
	const json = defaultOuterMpConfig
	const res = `
	module.exports = ${
		JSON.stringify( json )
	}
`
	return res
}

