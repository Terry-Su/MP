import * as _ from 'lodash'
import * as FS from 'fs-extra'

import { getSelectionJsonPath } from '../../../store/index'
import * as i from '../../../interface/index'


export default function(): i.SelectionJsonElement[] {
	let selectionJson: any
	const selectionPath = getSelectionJsonPath()

	selectionJson = FS.readJSONSync( selectionPath )

	return (
		_.isArray( selectionJson ) ?
		selectionJson :
		null
	)
}
