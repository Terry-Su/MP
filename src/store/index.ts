import * as PATH from "path"
import * as FS from "fs-extra"

import {
	DOT_MP_CONFIG,
	SELECTION_JSON,
	MP_CONFIG_JS,
	DOT_MP_CONFIG_JSON,
	NODE_CONFIG_FULL_PATH_NAME
} from "./constant"
import * as i from "../interface/index"
import { schemaMpConfig, schemaSelection } from "../schema/index"
import createInnerMpConfig from "../shared/createInnerMpConfig"
import { existFile } from "../util/index"
import createOuterMpConfig from "../shared/createOuterMpConfig"
import { defaultOuterMpConfig, defaultInnerMpConfig, defaultMpConfig, defaultNodeConfig } from "./initialState"
import ajvValidate from "../util/ajvValidate";
import getJsonByPath from "../util/getJsonByPath";

export function getRootPath() {
	return process.cwd()
}
export function getSelectionJsonPath() {
	return PATH.resolve( getRootPath(), `${DOT_MP_CONFIG}/${SELECTION_JSON}` )
}

export function getInnerMpConfigPath() {
	return PATH.resolve( getRootPath(), `${DOT_MP_CONFIG}/${DOT_MP_CONFIG_JSON}` )
}

export function getOuterMpConfigPath() {
	return PATH.resolve( getRootPath(), `${MP_CONFIG_JS}` )
}

/**
 * Selection
 */
export function getSelection(): i.SelectionElement[] {
	const selectionPath = getSelectionJsonPath()

	try {
		let selection: i.SelectionElement[]
		let isValid: boolean

		selection = FS.readJsonSync( selectionPath )

		isValid = ajvValidate( schemaSelection, selection )

		if ( isValid ) {
			return selection
		}
	} catch ( e ) {
		console.log( e )
	}

	return []
}

/**
 * Mp config
 */
export function getMpConfig(): i.InnerMpConfig {
	let config = { ...defaultMpConfig }
	const innerMpConfig = getInnerMpConfig()
	const outerMpConfig = getOuterMpConifig()

	try {
		let isFormatValid = false

		config = {
			...defaultMpConfig,
			...innerMpConfig,
			...outerMpConfig
		}

		isFormatValid = ajvValidate( schemaMpConfig, config )

		if ( isFormatValid ) {
			return config
		}
	} catch ( e ) {
		console.log( e )
		config = { ...defaultMpConfig }
	}
	return config
}
export function getOuterMpConifig(): i.OuterMpConfig {
	let outerMpConfig: i.OuterMpConfig = defaultOuterMpConfig
	const outerMpConfigPath = getOuterMpConfigPath()

	createOuterMpConfigIfNotExist( outerMpConfigPath )

	try {
		outerMpConfig = require( outerMpConfigPath )
	} catch ( e ) {
		console.log( e )
	}

	return outerMpConfig
}

export function getInnerMpConfig(): i.InnerMpConfig {
	let innerMpConfig: i.InnerMpConfig = defaultInnerMpConfig
	const innerMpConfigPath = getInnerMpConfigPath()

	createInnerMpConfigIfNotExist( innerMpConfigPath )

	try {
		innerMpConfig = FS.readJSONSync( innerMpConfigPath )
	} catch ( e ) {
		console.log( e )
	}

	return innerMpConfig
}
export function setInnerMpConfigKey( key: string, value: any ) {
	try {
		const innerMpConfigPath = getInnerMpConfigPath()

		createInnerMpConfigIfNotExist( innerMpConfigPath )

		const innerMpConfig = FS.readJsonSync( innerMpConfigPath )
		innerMpConfig[ key ] = value
		FS.writeJSONSync( innerMpConfigPath, innerMpConfig )
	} catch ( e ) {
		console.log( e )
	}
}

function createInnerMpConfigIfNotExist( innerMpConfigPath: string ) {
	if ( !existFile( innerMpConfigPath ) ) {
		createInnerMpConfig()
	}
}

function createOuterMpConfigIfNotExist( outerMpConfigPath: string ) {
	if ( !existFile( outerMpConfigPath ) ) {
		createOuterMpConfig()
	}
}


/**
 * Node config
 */
export function getNodeConfigByPath( path: string ): i.NodeConfig {
	let res: i.NodeConfig
	const nodeConfigPath = `${ path }/${ NODE_CONFIG_FULL_PATH_NAME }`
	const customNodeConfig = getJsonByPath( nodeConfigPath )
	res = {
		...defaultNodeConfig,
		...customNodeConfig,
	}
	return res
}
export function getDefaultWebpackConfigPathByPagePath( path: string ): any {
	const res = `${ path }/webpack.config.js`
	return res
}
