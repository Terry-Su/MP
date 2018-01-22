import * as _ from "lodash"

import * as i from "../../interface/index"
import implementWebpackByConfig from "./implementWebpackByConfig";
import { getNodeConfigByPath } from "../../store/index";
import getWebpackConfigByPagePath from "./getWebpackConfigByPagePath";

export default function( paths: string[] ) {
	paths.map( run )

	function run( path: string ) {
		const nodeConfig: i.NodeConfig = getNodeConfigByPath( path )
		const { useWebpack } = nodeConfig

		if ( useWebpack === true ) {
			const webpackConfig: any = getWebpackConfigByPagePath( path )
			implementWebpackByConfig( webpackConfig )
		}
	}
}
