import getSelectionJsonContent from '../index'
import * as PATH from 'path'


const srcRoot1Path = PATH.resolve( __dirname, './srcRoot1' )
const srcRoot2Path = PATH.resolve( __dirname, './srcRoot2' )

describe(`GetSelectionJsonContent: `, function () {

	it(`srcRoot1Path`, function () {
		const selectionJsonContent = getSelectionJsonContent( [ srcRoot1Path, srcRoot2Path ] )
		console.log( { selectionJsonContent } )
		expect( true ).toBe( true )
	})
})
