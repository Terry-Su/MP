import { existJsonFile } from '../../util/index'
import { getSelectionJsonPath } from '../../store/index'


export default function () {
	const selectionJsonPath = getSelectionJsonPath()
	return existJsonFile( selectionJsonPath )
}
