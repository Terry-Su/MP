import * as PATH from 'path'
const dirTree = require( 'directory-tree' )

import { NODE_CONFIG } from '../../store/constant'
import { isFile, isDirectory } from '../../util/index'
import { isFileNodeConfig, getDirectoryName } from '../../shared/FileSystem'
import { getPathsOfAllNodeConfig } from '../../shared/index'

const inquirer = require( 'inquirer' )




export default function ( entryPath: string = process.cwd(), defaultSelection?: any ) {
	// ****** get all `nodeConfig` paths ******
	const pathsOfAllNodeConfig = getPathsOfAllNodeConfig( entryPath )

	// ****** get all paths contain `nodeConfig` ******
	const pathsContainNodeConfig = pathsOfAllNodeConfig.map( getDirectoryName )

	return pathsContainNodeConfig
	// ****** interact by inquirer ******
	inquirer.prompt()

	// ****** return current selection ******

}
