export default function(
	potentialParentPath: string,
	childrenPath: string
): boolean {
	let res = false

	try {
		const regexp = new RegExp( `^${potentialParentPath}` )
		const replacedRes = childrenPath.match( regexp )
		if ( replacedRes && replacedRes.length > 0 ) {
			res = true
		}
	} catch ( e ) {}

	return res
}
