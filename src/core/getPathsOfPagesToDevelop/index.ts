import checkSelectionJsonExist from './checkSelectionJsonExist/index'
import createSelectionJson from './createSelectionJson/index'
import checkProjectsWithNodeConfigChange from './checkProjectsWithNodeConfigChange/index'
import { promptProjectsSelectionChange, promptUpdateProjectKey } from '../../prompt/index'
import { ChoicePromptUpdateProjectKey } from './../../store/constant'
import { setInnerMpConfigKey, getMpConfig } from '../../store/index'
import { MpConfigKey } from '../../store/constant'
import main from './main/index'
import implementSyncMethodWithPromise from '../../util/implementSyncMethodWithPromise';

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
		createSelectionJson()

		console.log( `.mpconfig>selection.json reset\n` )

		return promptUpdateProjectKeyAndRespondChoice()
	}

	function chooseToHide() {
		setInnerMpConfigKey( MpConfigKey.HIDE_DEFAULT_PROMPT, true )
		return implementSyncMethodWithPromise( main )
	}

	return []
}
