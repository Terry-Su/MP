import * as PATH from 'path'
import selectProjectsToDevelop from '../index'



const testRootPath = PATH.resolve( __dirname, 'data' )


console.log( selectProjectsToDevelop( testRootPath, null ) )
describe("selectProjectsToDevelop: ", function () {
	it("", function () {

		// expect().toBe()
	})
})
