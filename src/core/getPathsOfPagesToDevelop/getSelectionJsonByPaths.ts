import * as _ from "lodash"
import * as PATH from "path"

import { getPathsContainNodeConfig } from "../../shared/index"
import * as i from "../../interface/index"
import { getRootPath } from "../../store/shared/index"
import { SelectionKey } from "../../store/constant"

export default function( srcRootPaths: string[] = [] ): i.SelectionElement[] {
	let selectionJson: i.SelectionElement[] = []

	function pushElementToSelectionJson( srcRootPath: string ) {
		const pathsContainNodeConfig: string[] = getPathsContainNodeConfig(
			srcRootPath
		)

		// src root path exists and has config file
		if ( pathsContainNodeConfig.length > 0 ) {
			const selectionJsonElement: i.SelectionElement = getSelectionJsonElement(
				srcRootPath,
				pathsContainNodeConfig
			)
			selectionJson.push( selectionJsonElement )
		}
	}

	srcRootPaths.map( pushElementToSelectionJson )

	return selectionJson
}

function getSelectionJsonElement(
	srcRootPath: string,
	pathsContainNodeConfig: string[]
): i.SelectionElement {
	let selectionJsonElement: i.SelectionElement = {}
	/**
	 * For setting selectionJsonElement
	 */
	let newestJson: any = selectionJsonElement

	const paths = pathsContainNodeConfig

	const firstField = PATH.relative( getRootPath(), srcRootPath )
	selectionJsonElement[ firstField ] = {}
	newestJson = selectionJsonElement[ firstField ]

	paths.map( chain )

	function chain( path: string ) {
		const folderNamesUnderSrcRootPath: string[] = getFolderNamesUnderSrcRootPath(
			path
		)

		/**
		 * Add SelectionKey.SELF
		 */
		if ( isRootPath( path ) ) {
			const tmpJson: any = selectionJsonElement[ firstField ]
			tmpJson[ SelectionKey.SELF ] = false
		}

		newestJson = selectionJsonElement[ firstField ]

		folderNamesUnderSrcRootPath.map( chainFolderName )

		function isRootPath( path: string ) {
			return path === srcRootPath
		}
	}

	function chainFolderName( folderName: string, index: number, arr: string[] ) {
		const isLast: boolean = isLastElement( index, arr.length )
		if ( !isLast ) {
			if ( _.isNil( newestJson[ folderName ] ) ) {
				newestJson[ folderName ] = {}
			}
			if ( _.isBoolean( newestJson[ folderName ] ) ) {
				newestJson[ folderName ] = {}

				/**
				 * Add SelectionKey.SELF
				 */
				newestJson[ folderName ][ SelectionKey.SELF ] = false
			}

			newestJson = newestJson[ folderName ]
		}

		if ( isLast ) {
			if ( _.isPlainObject( newestJson[ folderName ] ) ) {
				/**
				 * Add SelectionKey.SELF
				 */
				newestJson[ folderName ][ SelectionKey.SELF ] = false
			}
			if ( !_.isPlainObject( newestJson[ folderName ] ) ) {
				newestJson[ folderName ] = false
			}
		}
	}

	function getFolderNamesUnderSrcRootPath( path: string ): string[] {
		return path
			.replace( new RegExp( `^${srcRootPath}` ), "" )
			.split( "/" )
			.filter( isNotEmptyStr )
	}

	function isNotEmptyStr( str: string ) {
		return str !== ""
	}

	function isLastElement( index: number, arrayLength: number ) {
		return index === arrayLength - 1
	}

	return selectionJsonElement
}
