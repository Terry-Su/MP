import * as PATH from 'path'
const dirTree = require( 'directory-tree' )

import { NODE_CONFIG } from '../../store/constant'
import { isFile, isDirectory } from '../../util/index'
import { isFileNodeConfig, getDirectoryName } from '../../shared/FileSystem'


function getPathsOfAllNodeConfig( workspacePath: string ) {
	let pathsOfAllNodeConfig : string[] = []

	function handleFolderPath( path: string ) {
		getTree( path )
		.children
		.map(
			( { path }: { path: string } ) => {
				if ( isDirectory( path ) ) {
					return handleFolderPath( path )
				}
				if ( isFile( path ) ) {
					return handleFilePath( path )
				}
			}
		)
	}
	function handleFilePath( path: string ) {
		if ( isFileNodeConfig( path ) ) {
			pathsOfAllNodeConfig.push( path )
		}
	}

	handleFolderPath( workspacePath )

	return pathsOfAllNodeConfig
}



export default function ( workspacePath: string = process.cwd(), defaultSelection: any ) {
	// ****** get all `nodeConfig` paths ******
	const pathsOfAllNodeConfig = getPathsOfAllNodeConfig( workspacePath )

	// ****** get all paths contain `nodeConfig` ******
	const pathsContainNodeConfig = pathsOfAllNodeConfig.map( getDirectoryName )

	return pathsContainNodeConfig
	// ****** interact by inquirer ******


	// ****** return current selection ******

}


function getTree( path: string ) {
	return dirTree( path )
}
