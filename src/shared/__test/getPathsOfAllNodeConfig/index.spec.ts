import * as PATH from 'path'
import getPathsOfAllNodeConfig from '../../getPathsOfAllNodeConfig'
import { NODE_CONFIG } from '../../../store/constant'

const entryPath = PATH.resolve(__dirname, 'data')

const pathsOfAllNodeConfig = getPathsOfAllNodeConfig(entryPath)

function getRelativePath(path: string) {
	return PATH.relative(__dirname, path)
}

describe(`GetPathsOfAllNodeConfig: `, function () {
	it(` Get the right relative paths `, function () {
		const relativePaths = pathsOfAllNodeConfig.map(getRelativePath)
		const correctRelativePaths: string[] = [
			`data/LevelOneFolder1/LevelTwoFolder1/LevelThreeFolder1/folderWithNodeConfig1/${NODE_CONFIG}.js`,
			`data/rootFolderWithNodeConfig1/${NODE_CONFIG}.js`
		]

		expect(relativePaths).toEqual(correctRelativePaths)
	})
})
