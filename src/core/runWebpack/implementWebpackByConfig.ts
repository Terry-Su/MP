import * as webpack from "webpack"


export default function( webpackConfig: any ) {
	const compiler = webpack( webpackConfig )

	const watching = compiler.watch(
		{
			/* watchOptions */
		},
		( err, stats ) => {
			if ( err ) {
				console.error( err )
				return
			}

			console.log(
				stats.toString( {
					chunks: false,
					colors: true
				} )
			)
		}
	)

	return watching
}
