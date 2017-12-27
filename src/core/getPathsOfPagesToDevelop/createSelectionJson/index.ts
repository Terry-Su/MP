import { getSelectionJsonPath } from '../../../store/index'
import getSelectionJsonContent from '../getSelectionJsonContent/index'

export default function ( paths: string[] = [] ) {
	const selectionJsonPath: string = getSelectionJsonPath()

	const jsonContent: string = getSelectionJsonContent( paths )
}
