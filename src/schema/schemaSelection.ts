import { SelectionKey } from '../store/constant'


/**
 * sync from schema>index>SelectionElement
 */
// const selectionElementSchema: any =

export default ({
	type: 'array',
	items: {
		type: 'object',
		patternProperties: {
			'.*': {
				type: [ 'boolean', 'object' ],
				patternProperties: {
					'.*': {
						'$ref': '#/items/patternProperties/.*'
					}
				}
			}
		},
	}
})
