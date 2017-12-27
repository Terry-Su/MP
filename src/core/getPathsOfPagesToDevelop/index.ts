import checkSelectionJson from './checkSelectionJson/index'
import createSelectionJson from './createSelectionJson/index'

export default function ( paths: string[] = [] ): string[] {
	const result_checkSelectionJson: boolean = checkSelectionJson()

	if ( ! result_checkSelectionJson ) {
		createSelectionJson( paths )
	}

	if ( result_checkSelectionJson ) {

	}

	return []
}
