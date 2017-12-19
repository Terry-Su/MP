import existFile = require( './existFile' )
import * as FS from 'fs'
import * as _ from 'lodash'


export default function( path: string ) : boolean {
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
