import checkSelectionJsonExist from './checkSelectionJsonExist'
import createSelectionJson from './createSelectionJson'
import checkProjectsStructureChange from './checkProjectsStructureChange'
import { promptProjectsSelectionChange, promptUpdateProjectKey } from '../../prompt/index'
import { ChoicePromptUpdateProjectKey } from './../../store/constant'
import { setInnerMpConfigKey, getMpConfig } from '../../store/index'
import { MpConfigKey } from '../../store/constant'
import main from './main'
import implementSyncMethodWithPromise from '../../util/implementSyncMethodWithPromise';
import updateSelectionJson from './updateSelectionJson';

export default function ( paths: string[] = [] ): any {
	const existSelectionJson: boolean = checkSelectionJsonExist()

	if ( ! existSelectionJson ) {
		createSelectionJson( paths )
		return promptUpdateProjectKeyAndRespondChoice()
	}

	if ( existSelectionJson ) {
		const isChanged = checkProjectsStructureChange( paths )

		if ( isChanged ) {
			return promptProjectsSelectionChange()
				.then(
					( shouldUpdateSelectionJson: boolean ) => {
						// reset seletion json file
						shouldUpdateSelectionJson && updateSelectionJson( paths )

						return promptUpdateProjectKeyAndRespondChoice()
					}
				)
		}
		if ( ! isChanged ) {
			return promptUpdateProjectKeyAndRespondChoice()
		}
	}


	function promptUpdateProjectKeyAndRespondChoice() {
		if ( isHidingDefaultPrompt() ) {
			return implementSyncMethodWithPromise( main )
		}

		return promptUpdateProjectKey().then( resolveAnswer )

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

		function isHidingDefaultPrompt(): boolean {
			let res = false
			const mpConfig: any = getMpConfig()
			res = mpConfig[ MpConfigKey.HIDE_DEFAULT_PROMPT ]
			return res
		}
	}

	function chooseToContinue() {
		return implementSyncMethodWithPromise( main )
	}

	function chooseToReset() {
		// reset seletion json file
		resetSelectionJson( paths )

		console.log( `.mpconfig>selection.json reset\n` )

		return promptUpdateProjectKeyAndRespondChoice()
	}

	function chooseToHide() {
		setInnerMpConfigKey( MpConfigKey.HIDE_DEFAULT_PROMPT, true )
		return implementSyncMethodWithPromise( main )
	}

	function resetSelectionJson( paths: string[] ) {
		return createSelectionJson( paths )
	}

	return []
}
