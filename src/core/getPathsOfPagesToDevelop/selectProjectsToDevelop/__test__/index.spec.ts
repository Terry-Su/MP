import * as PATH from 'path'
import selectProjectsToDevelop from '../index'


const entryPath = PATH.resolve( __dirname, 'data' )

selectProjectsToDevelop( entryPath )

// console.log( selectProjectsToDevelop( testRootPath, null ) )
// describe("selectProjectsToDevelop: ", function () {
// 	it("", function () {

// 		// expect().toBe()
// 	})
// })
