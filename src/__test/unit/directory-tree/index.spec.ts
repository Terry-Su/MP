const PATH = require( 'path' )
const dirTree = require( 'directory-tree' )
const _ = require( 'lodash' )

const testPath: string = PATH.resolve( __dirname, './data' )
const dirTreeElement:any = dirTree( testPath )


describe("directory-tree: ", function () {
	it("has path whose type is string", function () {
		expect(
			_.isString( dirTreeElement[ 'path' ] )
		).toBe( true )
	})

	it("has name whose type is string", function () {
		expect(
			_.isString( dirTreeElement[ 'name' ] )
		).toBe( true )
	})

	it("has children whose type is array", function () {
		expect(
			_.isArray( dirTreeElement[ 'children' ] )
		).toBe( true )
	})
})






