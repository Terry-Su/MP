import * as PATH from 'path'

import { NODE_CONFIG, NODE_CONFIG_EXTENSION } from 'store/constant'


export function isFileNodeConfig( path: string ) {
	return (
		PATH.basename( path ) === NODE_CONFIG &&
		PATH.extname( path ) === NODE_CONFIG_EXTENSION
	)
}

export function getDirectoryName( path: string ) {
	return PATH.dirname( path )
}
