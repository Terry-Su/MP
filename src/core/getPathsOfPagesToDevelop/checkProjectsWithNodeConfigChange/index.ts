import * as _ from 'lodash'

import * as i from '../../../interface/index'
import getCurrentSelectionJson from '../getCurrentSelectionJson/index'
import getSelectionJsonContentByPaths from '../getSelectionJsonContentByPaths/index'


export default function ( paths: string[] ) {
	const currentSelectionJson: i.SelectionJsonElement[] = getCurrentSelectionJson()

	const comparingSelectionJsonContent = getSelectionJsonContentByPaths( paths )
	const comparingSelectionJson: i.SelectionJsonElement[] = getJson( comparingSelectionJsonContent )

	if (
		! _.isNil( currentSelectionJson ) &&
		! _.isNil( comparingSelectionJson )
	) {
		return ! compare( currentSelectionJson, comparingSelectionJson )
	}

	return true

	function getJson( jsonStr: string ): i.SelectionJsonElement[] {
		try {
			return JSON.parse( jsonStr )
		} catch ( e ) {
			return null
		}
	}

	function compare( currentSelectionJson: i.SelectionJsonElement[], comparingSelectionJson: i.SelectionJsonElement[] ): boolean {
		try {
			return (
				compareJsonIgnoreStaticValue( currentSelectionJson, comparingSelectionJson )
			)
		} catch ( e ) {}

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
						Object.keys( a ).every( bHasKey ) &&
						_.values( a ).filter( _.isPlainObject ).every( bHasValue )
					 )
				}
			} catch ( e ) {}
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

