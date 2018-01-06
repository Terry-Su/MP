import * as FS from 'fs-extra'

import { getSelectionJsonPath } from '../../../store/index'
import getSelectionJsonContentByPaths from '../getSelectionJsonContentByPaths/index'

export default function ( paths: string[] = [] ) {
	const selectionJsonPath: string = getSelectionJsonPath()

	const selectionJsonContent: string = getSelectionJsonContentByPaths( paths )

	FS.outputFileSync( selectionJsonPath, selectionJsonContent)
}
