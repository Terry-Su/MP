const PATH = require( "path" )

module.exports = {
	useWebpack: true,
	webpackConfig: {
		entry : PATH.resolve( __dirname, "./entry.js" ),
		output: {
			path    : __dirname,
			filename: "bundle.js"
		}
	}
}