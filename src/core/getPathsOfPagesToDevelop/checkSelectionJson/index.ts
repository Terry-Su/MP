import { existJsonFile } from '../../../util/index'
import { getSelectionJsonPath } from '../../../store/initialState'


export default function () {
	const selectionJsonPath = getSelectionJsonPath()
	return existJsonFile( selectionJsonPath )
}
