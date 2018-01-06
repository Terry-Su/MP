import promptProjectsSelectionChange from '../promptProjectsSelectionChange'


jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000

/**
 * setting
 */
const config_enable_interact = false

describe(`PromptProjectsSelectionChange`, function () {
	let result: boolean = false

	beforeEach(
		done => {
			console.log( `\n` )
			config_enable_interact && promptProjectsSelectionChange().then(
				( answer: any ) => {
					result = answer
					done()
				}
			)

			! config_enable_interact && done()
		}
	)

	it(`Test: `, function ( done ) {

		config_enable_interact && expect(
			result === true ||
			result === false
		).toBe( true )

		done()
	})
})
