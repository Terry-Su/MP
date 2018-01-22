import * as FS from 'fs-extra'

import { getInnerMpConfigPath } from "../store/index"
import { existFile } from "../util/index"
import { InnerMpConfig } from '../interface/index'
import { defaultInnerMpConfig } from '../store/initialState'


export default function () {
	const innerMpConfigPath = getInnerMpConfigPath()

	const initialString: string = getInnerMpConfigInitialString()

	FS.outputFileSync( innerMpConfigPath, initialString )
}

function getInnerMpConfigInitialString(): string {
	const json = defaultInnerMpConfig
	const res = JSON.stringify( json )
	return res
}


