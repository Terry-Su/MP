import existJsonFile from '../../existJsonFile'
import * as PATH from 'path'

let correctJsonFilePath: string = PATH.resolve( __dirname, './data/correctJson.json' )
let incorrectJsonFilePath: string = PATH.resolve( __dirname, './data/incorrectJson.json' )
let nonexistentJsonFilePath: string = PATH.resolve( __dirname, './data/nonexistentJsonFilePath.json' )

describe("existJsonFile: ", function () {
	it("correct json file", function () {
		expect(
			existJsonFile( correctJsonFilePath )
		).toBe( true )
	})

	it("incorrect json file", function () {
		expect(
			existJsonFile( incorrectJsonFilePath )
		).toBe( false )
	})

	it("nonexistent json file", function () {
		expect(
			existJsonFile( nonexistentJsonFilePath )
		).toBe( false )
	})
})
