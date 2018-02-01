import * as webpack from "webpack"
// import * as webpackDevServer from 'webpack-dev-server'

export default function( webpackConfig: any ) {
	// // server
	// const serverOptions = {
	// 	contentBase: webpackConfig.output.path,
	// 	hot: true,
	// 	host: 'localhost'
	// }

	// server
	// webpackDevServer.addDevServerEntrypoints( webpackConfig, serverOptions )

	const compiler = webpack( webpackConfig )

	// server
	// const server = new webpackDevServer( compiler, serverOptions )

	// server.listen( 5000, `localhost`, () => {
	// 	console.log( `dev server listening on port 5000` )
	// } )

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
