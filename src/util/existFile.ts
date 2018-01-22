import * as FS from "fs-extra"

export default function( path: string ) {
	let result: boolean = false

	try {
		result = FS.lstatSync( path ).isFile()
	} catch ( e ) {
		// console.log( e )
	}

	return result
}
