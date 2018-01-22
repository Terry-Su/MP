import { SelectionKey } from "../store/constant"

/**
 * sync from schema>index>SelectionElement
 */

export default {
	type : "array",
	items: {
		type             : "object",
		patternProperties: {
			".*": {
				type             : [ "boolean", "object" ],
				patternProperties: {
					".*": {
						$ref: "#/items/patternProperties/.*"
					}
				}
			}
		}
	}
}
