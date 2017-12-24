import existJsonFile from '../../existJsonFile'
import * as PATH from 'path'

let correctJsonFilePath: string = PATH.resolve( __dirname, './data/correctJson.json' )
let incorrectJsonFilePath: string = PATH.resolve( __dirname, './data/incorrectJson.json' )
let nonexistentJsonFilePath: string = PATH.resolve( __dirname, './data/nonexistentJsonFilePath.json' )

describe("ExistJsonFile: ", function () {
	it("Exist correct json file", function () {
		expect(
			existJsonFile( correctJsonFilePath )
		).toBe( true )
	})

	it("Exist incorrect json file", function () {
		expect(
			existJsonFile( incorrectJsonFilePath )
		).toBe( false )
	})

	it("Exist nonexistent json file", function () {
		expect(
			existJsonFile( nonexistentJsonFilePath )
		).toBe( false )
	})
})
