import * as _ from "lodash"


/**
 * Map sorted values of plain object in order
 */
export default function ( plainObject: any, sort: any, resolve: any ) {
	let res: any[] = []
	let collection : any[] = []

	_.mapValues( plainObject, pushKeyValueToCollection )

	if ( ! _.isNil( sort )  ) {
		collection = collection.sort( _sort )
	}

	res = collection.map( _resolve )
	return res

	function pushKeyValueToCollection( value: any, key: string ) {
		collection.push( {
			key,
			value
		} )
	}

	function _sort( a: any, b: any ): any {
		return sort( a, b )
	}

	function _resolve( { key, value }: { value: any, key: string } ) {
		resolve( value, key )
	}
}
