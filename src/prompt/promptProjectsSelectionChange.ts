import * as inquirer from "inquirer"

export default function(): any {
	const enum Choice {
		Yes = "Yes",
		No = "No"
	}
	const choices = [ Choice.Yes, Choice.No ]

	return inquirer
		.prompt( [
			{
				type   : "list",
				name   : "prompt",
				message: `Detect that projects' structure has changed, would you like to update selection json and continue?`,
				choices
			}
		] )
		.then( ( { prompt } ) => {
			if ( prompt === Choice.Yes ) {
				return true
			}

			if ( prompt === Choice.No ) {
				return false
			}

			return false
		} )
}
