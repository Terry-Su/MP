import * as _ from 'lodash'

import * as i from '../../interface/index'
import { getSelection } from '../../store/index'
import getSelectionJsonStringByPaths from './getSelectionJsonStringByPaths'
import { notSelectionSpecialKey } from '../../shared/index';


/**
 * Check whether projects owning node config had been added or removed
 */
export default function ( paths: string[] ) {
	const selection: i.SelectionElement[] = getSelection()

	const comparingSelectionContent = getSelectionJsonStringByPaths( paths )
	const selectionComparing: i.SelectionElement[] = getJson( comparingSelectionContent )

	if (
		! _.isNil( selection ) &&
		! _.isNil( selectionComparing )
	) {
		return ! compare( selection, selectionComparing )
	}

	return true

	function getJson( jsonStr: string ): i.SelectionElement[] {
		try {
			return JSON.parse( jsonStr )
		} catch ( e ) {
			console.log( e )
		}

		return null
	}

	function compare( selection: i.SelectionElement[], selectionComparing: i.SelectionElement[] ): boolean {
		try {
			return (
				compareJsonIgnoreStaticValue( selection, selectionComparing )
			)
		} catch ( e ) {
			console.log( e )
		}

		return false
	}


	function compareJsonIgnoreStaticValue( a: any, b: any ): boolean {
		return (
			compareJsonIgnoreStaticValueAtoB( a, b ) &&
			compareJsonIgnoreStaticValueAtoB( b, a )
		)

		function compareJsonIgnoreStaticValueAtoB( a: any, b: any ) {
			try {
				if ( _.isArray( a ) ) {
					return a.every( equalB )
				}

				if ( _.isPlainObject( a ) ) {
					 return (
						Object.keys( a ).filter( notSelectionSpecialKey ).every( bHasKey ) &&
						_.values( a ).filter( _.isPlainObject ).every( bHasValue )
					 )
				}
			} catch ( e ) {
				console.log( e )
			}

			return false

			function equalB( valueOfA: any, index: number ): boolean {
				return compareJsonIgnoreStaticValueAtoB( valueOfA, b[ index ] )
			}

			function bHasKey( keyOfA: string): boolean {
				return  _.includes( Object.keys( b ), keyOfA )
			}

			function bHasValue( valueOfA: any ): boolean {
				return _.values( b ).some( equal )

				function equal( valueOfB: any ): boolean {
					return compareJsonIgnoreStaticValueAtoB( valueOfB, valueOfA )
				}
			}
		}
	}
}

