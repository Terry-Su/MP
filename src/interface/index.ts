export interface SelectionJsonElement {
	'/:self'?: boolean,
	'/:all'?: boolean,
	[index: string]: boolean | SelectionJsonElement
}


