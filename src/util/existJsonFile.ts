import existFile = require( './existFile' )
import FS = require( 'fs' )
import _ = require( 'lodash' )

export = function( path: string ) {
	let result: boolean = false
	if ( existFile( path ) ) {
		const possibleJsonString = FS.readFileSync( path, { encoding: 'utf8' } )
		try {
			const possibleJson =  JSON.parse( possibleJsonString )
			result = _.isPlainObject( possibleJson )
		} catch(e) {}
	}

	return result
}
