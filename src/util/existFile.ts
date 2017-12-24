import FS = require( 'fs' )

export default function( path: string ) {
	let result: boolean  = false

	try {
		result = FS.lstatSync( path ).isFile()
	} catch (e) {}

	return result
}