import * as FS from 'fs-extra'

import { getSelectionJsonPath } from '../../../store/index'
import getSelectionJsonStringByPaths from '../getSelectionJsonStringByPaths/index'

export default function ( paths: string[] = [] ) {
	const selectionJsonPath: string = getSelectionJsonPath()

	const selectionJsonContent: string = getSelectionJsonStringByPaths( paths )

	FS.outputFileSync( selectionJsonPath, selectionJsonContent)
}
