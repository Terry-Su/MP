import checkSelectionJsonExist from './checkSelectionJsonExist/index'
import createSelectionJson from './createSelectionJson/index'
import checkProjectsWithNodeConfigChange from './checkProjectsWithNodeConfigChange/index'
import { promptProjectsSelectionChange, promptUpdateProjectKey } from '../../prompt/index'
import { ChoicePromptUpdateProjectKey } from './../../store/promptEnum'

export default function ( paths: string[] = [] ): string[] {
	const existSelectionJson: boolean = checkSelectionJsonExist()

	if ( ! existSelectionJson ) {
		createSelectionJson( paths )
		promptUpdateProjectKeyAndRespondChoice()
	}

	if ( existSelectionJson ) {
		const isChanged = checkProjectsWithNodeConfigChange( paths )

		if ( isChanged ) {
			promptProjectsSelectionChange()
				.then(
					( shouldResetAllSelection: boolean ) => {
						// reset seletion json file
						shouldResetAllSelection && createSelectionJson()
						promptUpdateProjectKeyAndRespondChoice()
					}
				)
		}
		if ( ! isChanged ) {
			promptUpdateProjectKeyAndRespondChoice()
		}
	}


	function promptUpdateProjectKeyAndRespondChoice() {
		promptProjectsSelectionChange().then( resolveAnswer )

		function resolveAnswer( answer: ChoicePromptUpdateProjectKey ) {
			if ( answer === ChoicePromptUpdateProjectKey.Continue ) {

			}
		}
	}
	return []
}
