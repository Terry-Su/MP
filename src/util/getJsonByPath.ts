import ajvValidate from "./ajvValidate";

export default function getJsonByPath( path: string ) {
	let res: any = {}
	let potentialJson: any
	let isValid: boolean = false

	const jsonSchema = {
		type: 'object'
	}

	try {
		potentialJson = require( path )
		isValid = ajvValidate( jsonSchema, potentialJson )

		if ( isValid ) {
			res = potentialJson
		}
	} catch ( e ) {
		console.log( e )
	}

	return res
}
