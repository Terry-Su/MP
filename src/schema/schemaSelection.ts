import { SelectionKey } from '../store/constant'


/**
 * sync from schema>index>SelectionElement
 */
// const selectionElementSchema: any =

export default ({
	type: 'array',
	items: {
		type: 'object',
		// properties: {
		// 	[SelectionKey.All]: {
		// 		type: 'boolean'
		// 	},
		// 	[SelectionKey.Self]: {
		// 		type: 'boolean'
		// 	}
		// },
		// patternProperties: {
		// 	'.*': {
		// 		type: [ 'boolean', 'object' ],
		// 		patternProperties: {
		// 			'.*': {
		// 				'$ref': '#/items'
		// 			}
		// 		}
		// 	}
		// },
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
