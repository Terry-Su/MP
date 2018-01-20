import * as inquirer from 'inquirer'

import { ChoicePromptUpdateProjectKey } from '../store/constant'


export default function (): any {
	const choices = [
		ChoicePromptUpdateProjectKey.CONTINUE,
		ChoicePromptUpdateProjectKey.RESET,
		ChoicePromptUpdateProjectKey.HIDE,
	]

	return inquirer
		.prompt( [
			{
				type: 'list',
				name: 'prompt',
				message: `You could set projects to develop by mutually update project key to true in .mpconfig>selection.json`,
				choices
			}
		] )
		.then(
			(
				{
					prompt
				}:
				{
					prompt: ChoicePromptUpdateProjectKey
				}
			) => {
				return prompt
			}
		)
}
