import * as _ from "lodash"

import * as i from "../../../interface/index"
import { getSelection } from "../../../store/index"
import { notSelectionSpecialKey } from "../../../shared/index"

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

		try {
			const paths1 = composePathsByNormalKeyword( info )

			// console.log( paths1 )
		} catch ( e ) {
			console.log( e )
		}

		/**
		 * Recur plain object to get all valid path names( path is true )
		 */
		function composePathsByNormalKeyword(
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
					pathNames.push( key )

					if ( value === true && notSelectionSpecialKey( key ) ) {
						paths.push( getPathByPathNames( pathNames ) )
					}

					if ( _.isPlainObject( value ) ) {
						recur( value, _.cloneDeep( pathNames ) )
					}
				}
			}

			return paths
		}

		/**
		 * Recur plain object to get all valid path names( self is true )
		 */
		function composePathsByKeyWordSelf( info: any ): string[] {
			let paths: string[] = []

			recur( info )

			function recur(
				plainObject: i.SelectionElement,
				pathNames: string[] = []
			) {
				_.mapValues( plainObject, resolveValue )

				function resolveValue( value: any, key: string ) {
					pathNames.push( key )

					if ( value === true && notSelectionSpecialKey( key ) ) {
						paths.push( getPathByPathNames( pathNames ) )
					}

					if ( _.isPlainObject( value ) ) {
						recur( value, _.cloneDeep( pathNames ) )
					}
				}
			}
			return []
		}

		/**
		 * Recur plain object to get all valid path names( all is true )
		 */
		function composePathsByKeyWordAll( info: any ): string[] {
			return []
		}

		function getPathByPathNames( pathNames: string[] ): string {
			return pathNames.join( "/" )
		}
		return null
	}

	return paths
}
