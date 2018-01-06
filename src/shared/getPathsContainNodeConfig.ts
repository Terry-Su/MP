import * as PATH from 'path'
const dirTree = require( 'directory-tree' )

import { isFile, isDirectory } from '../util/index'
import { isFileNodeConfig } from '../shared/FileSystem'

export default function ( entryPath: string ) {
	let pathsContainNodeConfig : string[] = []

	isDirectory( entryPath ) && handleFolderPath( entryPath )
	isFile( entryPath ) && handleFilePath( entryPath )

	function handleFilePath( path: string ) {
		isFileNodeConfig( path ) && pathsContainNodeConfig.push( PATH.dirname( path ) )
	}

	function handleFolderPath( path: string ) {
		getTree( path )
		.children
		.map(
			( { path:paramPath }: { path: string } ) => {
				isDirectory( paramPath ) && handleFolderPath( paramPath )
				isFile( paramPath ) && handleFilePath( paramPath )
			}
		)
	}

	function getTree( path: string ) {
		return dirTree( path )
	}

	return pathsContainNodeConfig
}

