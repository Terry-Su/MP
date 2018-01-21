import * as i from '../../interface/index'
import getSelectionJsonByPaths from './getSelectionJsonByPaths';

export default function ( srcRootPaths: string[] = [] ): string {
	let selectionJson: i.SelectionElement[] = getSelectionJsonByPaths( srcRootPaths )
	const res: string = JSON.stringify( selectionJson )
	return res
}
