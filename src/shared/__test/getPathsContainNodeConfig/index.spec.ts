import * as PATH from 'path'
import getPathsContainNodeConfig from '../../getPathsContainNodeConfig'
import { NODE_CONFIG } from '../../../store/constant'

const entryPath = PATH.resolve(__dirname, 'data')

const pathsOfAllNodeConfig = getPathsContainNodeConfig(entryPath)

function getRelativePath(path: string) {
	return PATH.relative(__dirname, path)
}

describe(`GetPathsContainNodeConfig: `, function () {
	it(` Get the right relative paths `, function () {
		const relativePaths = pathsOfAllNodeConfig.map(getRelativePath)
		const correctRelativePaths: string[] = [
			`data/LevelOneFolder1/LevelTwoFolder1/LevelThreeFolder1/folderWithNodeConfig1`,
			`data/rootFolderWithNodeConfig1`
		]

		expect(relativePaths).toEqual(correctRelativePaths)
	})
})
