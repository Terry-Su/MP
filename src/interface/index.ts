export interface SelectionElement {
	'/:self'?: boolean,
	'/:all'?: boolean,
	[index: string]: boolean | SelectionElement
}


/**
 * sync to store>schemaMpConfig
 */
export interface InnerMpConfig extends OutsideMpConfig {
	[ index: string ]: any,
}

export interface OutsideMpConfig {
	'hideDefaultPrompt': boolean,
}
