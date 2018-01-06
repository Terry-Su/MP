import * as inquirer from 'inquirer'


export default function (): any {
	const enum Choice {
		Yes = 'Yes',
		No = "No"
	}
	const choices = [ Choice.Yes, Choice.No ]

	return inquirer
		.prompt( [
			{
				type: 'list',
				name: 'prompt',
				message: `Detect that the projects' selection had changed, would you want to reset all selection?`,
				choices
			}
		] )
		.then(
			( { prompt } ) => {
				if ( prompt === Choice.Yes ) {
					return true
				}

				if ( prompt === Choice.No ) {
					return false
				}

				return false
			}
		)
}
