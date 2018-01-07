import * as _ from 'lodash'
import * as PATH from 'path'

import { getPathsContainNodeConfig } from '../../../shared/index'
import * as isParentDirectoryOf from '../../../lib/path-is-inside'

import * as i from '../../../interface/index'
import { getRootPath } from '../../../store/index'

export default function ( srcRootPaths: string[] = [] ): string {
	let selectionJson: i.SelectionElement[] = []

	function pushElementToSelectionJson( srcRootPath: string ) {
		let cachedData:any = {}
		const pathsContainNodeConfig: string[] = getPathsContainNodeConfig( srcRootPath )

		// src root path exists and has config file
		if ( pathsContainNodeConfig.length > 0 ) {
			const selectionJsonElement: i.SelectionElement = getSelectionJsonElement( srcRootPath, pathsContainNodeConfig )
			selectionJson.push( selectionJsonElement )
		}
	}

	srcRootPaths.map( pushElementToSelectionJson )

	return JSON.stringify( selectionJson )
}

function getSelectionJsonElement( srcRootPath: string, pathsContainNodeConfig: string[] ): i.SelectionElement {
	let selectionJsonElement: i.SelectionElement = {}
	/**
	 * the newest json for set selectionJsonElement
	 */
	let newestJson: any = selectionJsonElement
	const paths = pathsContainNodeConfig

	const firstField = PATH.relative( getRootPath(),  srcRootPath)
	selectionJsonElement[ firstField ] = {}
	newestJson = selectionJsonElement[ firstField ]

	paths.map( chain )

	function chain( path: string ) {
		const folderNamesUnderSrcRootPath: string[] = getFolderNamesUnderSrcRootPath( path )
		folderNamesUnderSrcRootPath.map( chainFolderName )
	}

	function chainFolderName( folderName: string, index: number, arr: string[] ) {
		const isLast: boolean = isLastElement( index, arr.length )
		if ( ! isLast ) {
			if ( ! _.isPlainObject( newestJson[ folderName ] ) ) {
				newestJson[ folderName ] = {}
			}

			newestJson = newestJson[ folderName ]
		}

		if ( isLast ) {
			newestJson[ folderName ] = false
		}
	}

	function getFolderNamesUnderSrcRootPath( path: string ): string[] {
		return (
			path
				.replace( new RegExp( `^${srcRootPath}` ), '' )
				.split( '\/' )
				.filter( isNotEmptyStr )
		)
	}

	function isNotEmptyStr( str: string ) {
		return str !== ''
	}

	function isLastElement( index: number, arrayLength: number ) {
		return index === arrayLength - 1
	}

	return selectionJsonElement
}
