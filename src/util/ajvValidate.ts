import * as Ajv from "../lib/ajv"

const ajv = new Ajv()

export default function( a?: any, b?: any, c?: any, d?: any, e?: any ) {
	return ajv.validate( a, b, c, d, e )
}
