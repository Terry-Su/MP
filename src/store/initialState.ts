import * as PATH from 'path'

import { OuterMpConfig, InnerMpConfig, NodeConfig } from "../interface/index"
import { MpConfigKey, OUTPUT_DIRECTORY, NodeConfigKey } from './constant';


const { HIDE_DEFAULT_PROMPT, OUTPUT, SRC, SERVER_PORT, OPEN_SERVER } = MpConfigKey
const { USE_WEBPACK, WEBPACK_CONFIG, WEBPACK_CONFIG_PATH} = NodeConfigKey

/**
 * Mp config
 */
export const defaultInnerMpConfig: InnerMpConfig = {}
export const defaultOuterMpConfig: OuterMpConfig = {
	[ OUTPUT ]: `/${ OUTPUT_DIRECTORY }`,
	[ SRC ]: [ '/' ],
	[ SERVER_PORT ]: 3000,
	[ OPEN_SERVER ]: true,
}
export const defaultMpConfig: InnerMpConfig = {
	[ HIDE_DEFAULT_PROMPT ]: false,
}


/**
 * Node config
 */
export const defaultNodeConfig: NodeConfig = {
	[ USE_WEBPACK ]: false,
	[ WEBPACK_CONFIG ]: null,
	[ WEBPACK_CONFIG_PATH ]: null,
}
