import * as PATH from 'path'
import getPathsOfAllNodeConfig from '../../getPathsOfAllNodeConfig'

const entryPath = PATH.resolve(__dirname, 'data')

const pathsOfAllNodeConfig = getPathsOfAllNodeConfig(entryPath)

function getRelativePath(path: string) {
	return PATH.relative(__dirname, path)
}

describe(`GetPathsOfAllNodeConfig: `, function () {
	it(` Get the right relative paths `, function () {
		const relativePaths = pathsOfAllNodeConfig.map(getRelativePath)
		const correctRelativePaths: string[] = [
			'data/LevelOneFolder1/LevelTwoFolder1/LevelThreeFolder1/folderWithNodeConfig1/nodeConfig.js',
			'data/rootFolderWithNodeConfig1/nodeConfig.js'
		]

		expect(relativePaths).toEqual(correctRelativePaths)
	})
})
