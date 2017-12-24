import { existJsonFile } from '../../../util/index'
import { selectionJsonPath } from '../../../store/initialState'


export default function () {
	return existJsonFile( selectionJsonPath )
}
