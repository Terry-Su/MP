export default function ( syncMethod: Function ): any {
	let promise: any = new Promise(
		( resolve ) => {
			const res = syncMethod()
			resolve( res )
		}
	)

	return Promise.resolve( promise )
}
