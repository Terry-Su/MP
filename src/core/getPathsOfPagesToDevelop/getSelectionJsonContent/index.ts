import { getPathsContainNodeConfig } from '../../../shared/index'
import * as isParentDirectoryOf from '../../../lib/path-is-inside'

export default function ( srcRootPaths: string[] = [] ): string {
	let json: any = []

	const jsonStructure = {

	}

	function pushPlainObjectToJson( srcRootPath: string ) {
		let cachedData:any = {}
		const pathsContainNodeConfig: string[] = getPathsContainNodeConfig( srcRootPath )

		const plainObject = getPlainObject( srcRootPath, pathsContainNodeConfig )
		json.push( plainObject )
	}
	srcRootPaths.map( pushPlainObjectToJson )

	return ''
}

function getPlainObject( srcRootPath: string, pathsContainNodeConfig: string[] ) {
	let plainObject = {}
	const paths = pathsContainNodeConfig

	paths.map( path => {
		if ( isPathParentDirectoryOfAnotherPath( path, paths ) ) {

		}
	} )

	function isPathParentDirectoryOfAnotherPath( path: string, paths: string[] ) {
		function isPathParentDirectoryOfChilrenPath( childrenPath: string ) {
			return path !== childrenPath && isParentDirectoryOf( path, childrenPath)
		}
		return paths.some( isPathParentDirectoryOfChilrenPath  )
	}

}
