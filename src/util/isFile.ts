import * as FS from 'fs'

export default function ( path: string ) {
	let result = false
	try {
		result = FS.lstatSync( path ).isFile()
	} catch (e) {
		// console.log( e )
	}
	return result
}
