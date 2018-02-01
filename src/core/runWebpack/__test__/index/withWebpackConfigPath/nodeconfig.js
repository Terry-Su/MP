const PATH = require( "path" )

module.exports = {
	useWebpack: true,
	webpackConfigPath: PATH.resolve( __dirname, 'script/webpack.config.js' )
}
