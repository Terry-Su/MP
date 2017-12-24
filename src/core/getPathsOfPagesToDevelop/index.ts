import existJsonFile from '../../util/existJsonFile'
import { selectionJsonPath } from '../../store/initialState'

const existSelectionJson: boolean = existJsonFile( selectionJsonPath )

export default function (): string[] {


	return []
}
