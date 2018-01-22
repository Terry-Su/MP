import {
	getNodeConfigByPath,
	getDefaultWebpackConfigPathByPagePath
} from "../../store/index"
import getJsonByPath from "../../util/getJsonByPath"

export default function( path: string ): any {
	let res: any
	const nodeConfig = getNodeConfigByPath( path )
	const { webpackConfig, webpackConfigPath } = nodeConfig

	if ( !_.isNil( webpackConfig ) ) {
		res = webpackConfig
	}

	if ( _.isNil( webpackConfig ) ) {
		res = getConfigByWebpackConfigPath( path )
	}

	return res

	function getConfigByWebpackConfigPath( path: string ): any {
		let config: any

		if ( !_.isNil( webpackConfigPath ) ) {
			config = getJsonByPath( webpackConfigPath )
		}
		if ( _.isNil( webpackConfigPath ) ) {
			const defaultPath = getDefaultWebpackConfigPathByPagePath( path )
			config = getJsonByPath( defaultPath )
		}

		return config
	}
}
