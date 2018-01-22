/**
 * Selection element
 */
export interface SelectionElement {
	'/:self'?: boolean,
	'/:all'?: boolean,
	[index: string]: boolean | SelectionElement
}


/**
 * Mp config( inner and outer config )
 * sync to store>schemaMpConfig
 */
export interface InnerMpConfig {
	// [ index: string ]: any,
}
export interface OuterMpConfig {
	'hideDefaultPrompt': boolean,
}



/**
 * Node config
 */
export interface NodeConfig {
	/**
	 * Run webpack or not for page
	 */
	useWebpack: boolean,

	/**
	 * Custom webpack config
	 */
	webpackConfig: any,

	/**
	 * Custom webpack config's file path
	 */
	webpackConfigPath: string
}
