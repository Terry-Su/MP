export interface SelectionElement {
	'/:self'?: boolean,
	'/:all'?: boolean,
	[index: string]: boolean | SelectionElement
}


/**
 * sync to store>schemaMpConfig
 */
export interface InnerMpConfig {
	// [ index: string ]: any,
}

export interface OuterMpConfig {
	'hideDefaultPrompt': boolean,
}
