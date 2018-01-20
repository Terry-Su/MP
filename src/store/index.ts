import * as PATH from 'path'
import * as FS from 'fs-extra'
import * as Ajv from '../lib/ajv'

import {
	DOT_MP_CONFIG,
	SELECTION_JSON,
	MP_CONFIG_JS,
	Dot_MP_CONFIG_JSON,
} from './constant'
import * as i from '../interface/index'
import { schemaMpConfig, schemaSelection } from '../schema/index'
import defaultMpConfig from './defaultMpConfig'
import createInnerMpConfig from '../shared/createInnerMpConfig';
import { existFile } from '../util/index';
import createOuterMpConfig from '../shared/createOuterMpConfig';

const ajv = new Ajv()


export function getRootPath() {
	return process.cwd()
}
export function getSelectionJsonPath() {
	return PATH.resolve( getRootPath(), `${ DOT_MP_CONFIG }/${ SELECTION_JSON }` )
}


export function getInnerMpConfigPath() {
	return PATH.resolve( getRootPath(), `${ DOT_MP_CONFIG }/${ Dot_MP_CONFIG_JSON }` )
}

export function getOuterMpConfigPath() {
	return PATH.resolve( getRootPath(), `${ MP_CONFIG_JS }` )
}

/**
 * selection
 */
export function getSelection(): i.SelectionElement[] {
	const selectionPath = getSelectionJsonPath()

	try {
		let selection: i.SelectionElement[]
		let isValid: boolean

		selection = FS.readJsonSync( selectionPath )

		isValid = ajv.validate( schemaSelection, selection )

		if ( isValid ) {
			return selection
		}
	} catch ( e ) {
		console.log( e )
	}

	return []
}


/**
 * mp config
 */
export function getMpConfig(): i.InnerMpConfig {
	let config = { ...defaultMpConfig }
	const innerMpConfigPath = getInnerMpConfigPath()
	const outerMpConfigPath = getOuterMpConfigPath()

	createInnerMpConfigIfNotExist( innerMpConfigPath )
	createOuterMpConfigIfNotExist( outerMpConfigPath )

	try {
		let isFormatValid = false

		const innerMpConfig = FS.readJSONSync( innerMpConfigPath )
		const outerMpConfig = require( outerMpConfigPath )

		config = {
			...defaultMpConfig,
			...innerMpConfig,
			...outerMpConfig,
		}

		isFormatValid = ajv.validate( schemaMpConfig )

		if ( isFormatValid ) {
			return config
		}
	} catch ( e ) {
		console.log( e )
		config =  { ...defaultMpConfig }
	}
	return config
}
export function setInnerMpConfigKey( key: string, value: any ) {
	try {
		const innerMpConfigPath = getInnerMpConfigPath()

		createInnerMpConfigIfNotExist( innerMpConfigPath )

		const innerMpConfig = FS.readJsonSync( innerMpConfigPath )
		innerMpConfig[ key ] = value
		FS.writeJSONSync( innerMpConfigPath, innerMpConfig )

	} catch( e ) {
		console.log( e )
	}
}

function createInnerMpConfigIfNotExist( innerMpConfigPath: string ) {
	if ( ! existFile( innerMpConfigPath ) ) {
		createInnerMpConfig()
	}
}

function createOuterMpConfigIfNotExist( outerMpConfigPath: string ) {
	if ( ! existFile( outerMpConfigPath ) ) {
		createOuterMpConfig()
	}
}
