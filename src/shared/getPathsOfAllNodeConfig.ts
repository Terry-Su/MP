import * as PATH from 'path'
const dirTree = require( 'directory-tree' )

import { isFile, isDirectory } from '../util/index'
import { isFileNodeConfig } from '../shared/FileSystem'



function getTree( path: string ) {
	return dirTree( path )
}

export default function getPathsOfAllNodeConfig( entryPath: string ) {
	let pathsOfAllNodeConfig : string[] = []

	function handleFilePath( path: string ) {
		isFileNodeConfig( path ) && pathsOfAllNodeConfig.push( path )
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

	isDirectory( entryPath ) && handleFolderPath( entryPath )
	isFile( entryPath ) && handleFilePath( entryPath )

	return pathsOfAllNodeConfig
}
