import { OuterMpConfig, InnerMpConfig, NodeConfig } from "../interface/index"
import { MpConfigKey } from "./constant";

/**
 * Mp config
 */
export const defaultInnerMpConfig: InnerMpConfig = {}
export const defaultOuterMpConfig: OuterMpConfig = {
	hideDefaultPrompt: false
}
export const defaultMpConfig: InnerMpConfig = {
	[ MpConfigKey.HIDE_DEFAULT_PROMPT ]: false
}


/**
 * Node config
 */
export const defaultNodeConfig: NodeConfig = {
	useWebpack: true,
	webpackConfig: null,
	webpackConfigPath: null
}
