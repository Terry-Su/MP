import * as PATH from 'path'
import getSelectionJsonStringByPaths from '../../getSelectionJsonStringByPaths';


const srcRoot1Path = PATH.resolve( __dirname, './srcRoot1' )
const srcRoot2Path = PATH.resolve( __dirname, './srcRoot2' )
const srcRoot3Path = PATH.resolve( __dirname, './srcRoot3' )

const selectionJson_result = [{
	"dist/core/getPathsOfPagesToDevelop/getSelectionJsonStringByPaths/__test__/srcRoot1": {
		"level1Folder1": {
			"folderWithNodeConfig": false,
			"level1Folder2": {
				"folderWithNodeConfig": false
			}
		}
	}
}, {
	"dist/core/getPathsOfPagesToDevelop/getSelectionJsonStringByPaths/__test__/srcRoot2": {
		"level1Folder1": {
			"folderWithNodeConfig": false,
			"level1Folder2": {
				"folderWithNodeConfig": false
			}
		}
	}
}]

const selectionJson_result_content = JSON.stringify( selectionJson_result )

describe(`GetSelectionJsonContent: `, function () {

	it(`test: `, function () {
		const selectionJsonContent = getSelectionJsonStringByPaths( [
			srcRoot1Path,
			srcRoot2Path,
			srcRoot3Path
		] )
		expect( selectionJsonContent ).toBe( selectionJson_result_content )
	})
})
