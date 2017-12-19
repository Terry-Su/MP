import existJsonFile from '../../util/existJsonFile'
import { selectionJsonPath } from '../../store/initialState'
import selectProjectsToDevelop from '../selectProjectsToDevelop/index'

const existSelectionJson: boolean = existJsonFile( selectionJsonPath )

export default function (): string[] {
	if ( !existSelectionJson ) {
		selectProjectsToDevelop( null )
	}

	if (existSelectionJson ) {

	}



	return []
}
