import * as _ from "lodash"
import * as PATH from 'path'

import * as i from "../../../interface/index"
import { getSelection, getRootPath } from "../../../store/index"
import { isSelectionSpecialKey } from "../../../shared/index"
import { SelectionKey } from "../../../store/constant";
import { AIsParentDirectoryOfB } from "../../../util/index";

export default function() {
	let paths: string[] = []
	const selection: i.SelectionElement[] = getSelection()

	!_.isNil( selection ) && selection.map( pushCompositePath )


	function pushCompositePath( info: any ) {
		const compositePaths = composePaths( info )

		if ( !_.isNil( compositePaths ) ) {
			/**
			 * remove the repeated
			 */
			paths = [ ...paths, ...compositePaths ]
		}
	}

	function composePaths( info: any ): string[] {
		/**
		 * An array to record path names again and again
		 *
		 */
		let pathNames: string[] = []
		let pathsComposedWithoutKeyword: string[] = []
		let pathsComposedWithKeywordSelf: string[] = []
		let pathsComposedWithKeywordAll: string[] = []

		try {
			pathsComposedWithoutKeyword = composePathsWithoutKeyword( info )
			pathsComposedWithKeywordSelf = composePathsWithKeyWordSelf( info )
			pathsComposedWithKeywordAll = composePathsWithKeyWordAll( info )

			// console.log( paths1 )
		} catch ( e ) {
			console.log( e )
		}

		pathNames = _.uniq(
			[
				...pathsComposedWithoutKeyword,
				...pathsComposedWithKeywordSelf,
				...pathsComposedWithKeywordAll,
			]
		)

		return pathNames
		/**
		 * Recur plain object to get all valid path names( path is true )
		 */
		function composePathsWithoutKeyword(
			info: any,
			pathNames: string[] = []
		): string[] {
			let paths: string[] = []

			recur( info )

			function recur(
				plainObject: i.SelectionElement,
				pathNames: string[] = []
			) {
				_.mapValues( plainObject, resolveValue )

				function resolveValue( value: any, key: string ) {
					const clonedPathNames = _.cloneDeep( pathNames )

					if ( ! isSelectionSpecialKey( key ) ) {
						clonedPathNames.push( key )
					}

					if ( ! isSelectionSpecialKey( key ) && value === true ) {
						paths.push( getPathByPathNames( clonedPathNames ) )
					}

					if ( _.isPlainObject( value ) ) {
						recur( value, clonedPathNames )
					}
				}
			}

			return paths
		}

		/**
		 * Recur plain object to get all valid path names( self is true )
		 */
		function composePathsWithKeyWordSelf( info: any ): string[] {
			let paths: string[] = []

			recur( info )

			function recur(
				plainObject: i.SelectionElement,
				pathNames: string[] = []
			) {
				_.mapValues( plainObject, resolveValue )

				function resolveValue( value: any, key: string ) {
					const clonedPathNames = _.cloneDeep( pathNames )

					if ( ! isSelectionSpecialKey( key ) ) {
						clonedPathNames.push( key )
					}

					if ( isKeySelf( key ) && value === true ) {
						const path = getPathByPathNames( clonedPathNames )
						paths.push( path )
					}

					if ( _.isPlainObject( value ) ) {
						recur( value, clonedPathNames )
					}
				}
			}
			return paths
		}

		/**
		 * Recur plain object to get all valid path names( all is true )
		 */
		function composePathsWithKeyWordAll( info: any ): string[] {
			let paths: string[] = []
			let pathsShowedAll: string[] = []

			recur( info )

			function recur(
				plainObject: i.SelectionElement,
				pathNames: string[] = [],
				shouldShowAll: boolean = false
			) {
				_.mapValues( plainObject, resolveValue )

				function resolveValue( value: any, key: string ) {
					const clonedPathNames = _.cloneDeep( pathNames )

					if ( ! isSelectionSpecialKey( key ) ) {
						clonedPathNames.push( key )
					}

					if ( isKeyAll( key ) && value === true ) {
						const pathShowedAll: string = getPathByPathNames( clonedPathNames )
						pathsShowedAll.push( pathShowedAll )
					}

					if (
						shouldShowAll &&
						(
							! isSelectionSpecialKey( key ) ||
							isKeySelf( key )
						)
					) {
						const path = getPathByPathNames( clonedPathNames )
						paths.push( path )
					}

					if ( _.isPlainObject( value  ) ) {
						const path = getPathByPathNames( clonedPathNames )
						recur( value, clonedPathNames, isPathUnderPathShowedAll( path ) )
					}

					function isPathUnderPathShowedAll( path: string ): boolean {
						const res: boolean = pathsShowedAll.some( isUnderPathShowedAll )

						function isUnderPathShowedAll( pathShowedAll: string ) {
							let res: boolean = false
							const rootPath = getRootPath()
							const absolutePath = PATH.resolve( rootPath, path )
							const absolutePathShowedAll = PATH.resolve( rootPath, pathShowedAll )

							res = AIsParentDirectoryOfB( absolutePathShowedAll, absolutePath )
							return res
						}

						return res
					}
				}
			}

			return paths
		}

		function getPathByPathNames( pathNames: string[] ): string {
			return pathNames.join( "/" )
		}

		function isKeySelf( key: string ) {
			return key === SelectionKey.SELF
		}

		function isKeyAll( key: string ) {
			return key === SelectionKey.ALL
		}
	}

	return paths
}
