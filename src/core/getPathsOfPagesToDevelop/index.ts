import checkSelectionJsonExist from './checkSelectionJsonExist/index'
import createSelectionJson from './createSelectionJson/index'
import checkProjectsWithNodeConfigChange from './checkProjectsWithNodeConfigChange/index'
import { promptProjectsSelectionChange, promptUpdateProjectKey } from '../../prompt/index'
import { ChoicePromptUpdateProjectKey } from './../../store/constant'
import { setInnerMpConfigKey } from '../../store/index'
import { MpConfigKey } from '../../store/constant'


export default function ( paths: string[] = [] ): any {
	const existSelectionJson: boolean = checkSelectionJsonExist()

	if ( ! existSelectionJson ) {
		createSelectionJson( paths )
		return promptUpdateProjectKeyAndRespondChoice()
	}

	if ( existSelectionJson ) {
		const isChanged = checkProjectsWithNodeConfigChange( paths )

		if ( isChanged ) {
			return promptProjectsSelectionChange()
				.then(
					( shouldResetAllSelection: boolean ) => {
						// reset seletion json file
						shouldResetAllSelection && createSelectionJson()

						return promptUpdateProjectKeyAndRespondChoice()
					}
				)
		}
		if ( ! isChanged ) {
			return promptUpdateProjectKeyAndRespondChoice()
		}
	}


	function promptUpdateProjectKeyAndRespondChoice() {
		promptProjectsSelectionChange().then( resolveAnswer )

		function resolveAnswer( answer: ChoicePromptUpdateProjectKey ) {
			switch( answer ) {
				case ChoicePromptUpdateProjectKey.CONTINUE:
					return chooseToContinue()
				case ChoicePromptUpdateProjectKey.RESET:
					return chooseToReset()
				case ChoicePromptUpdateProjectKey.HIDE:
					return chooseToHide()
			}
		}
	}

	function chooseToContinue() {

	}

	function chooseToReset() {
		// reset seletion json file
		createSelectionJson()

		console.log( `.mpconfig>selection.json was reset!\n` )

		return promptUpdateProjectKeyAndRespondChoice()
	}

	function chooseToHide() {
		setInnerMpConfigKey( MpConfigKey.HIDE_DEFAULT_PROMPT, true )
	}

	return []
}
