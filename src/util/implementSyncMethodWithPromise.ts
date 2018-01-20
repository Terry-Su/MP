export default function ( syncMethod: Function ): any {
	return Promise.resolve(
		new Promise(
			resolve => {
				const res = syncMethod()
				resolve( res )
			}
		)
	)
}
