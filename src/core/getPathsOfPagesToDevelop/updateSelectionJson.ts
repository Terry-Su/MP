import * as _ from 'lodash'
import * as FS from 'fs-extra'
import * as i from '../../interface/index'

import { getSelection } from '../../store/index'
import getSelectionJsonByPaths from './getSelectionJsonByPaths'
import { getSelectionJsonPath } from '../../store/index'
import { notSelectionSpecialKey } from '../../shared/index';

export default function (paths: string[] = []) {
	const selectionJsonPath: string = getSelectionJsonPath()
	/**
	 * Current selection
	 */
	const selection: i.SelectionElement[] = getSelection()

	/**
	 * New pure selection got by current projects' sturcture
	 */
	const selectionReference = getSelectionJsonByPaths(paths)

	const selectionUpdated = getUpdatedSelection()
	const selectionUpdatedString = JSON.stringify(selectionUpdated)
	FS.outputFileSync(selectionJsonPath, selectionUpdatedString)

	function getUpdatedSelection(): i.SelectionElement[] {
		let newSelection: i.SelectionElement[] = _.cloneDeep(selection)

		selectionReference.map(updateSelectionElement)

		return newSelection

		function updateSelectionElement(plainObject: i.SelectionElement, index: number) {
			const selectionElementNew: i.SelectionElement = newSelection[index]
			/**
			 * Selection element of new pure selection
			 */
			const selectionElementReference: i.SelectionElement = selectionReference[index]

			recurSetSelectionElement(selectionElementNew, selectionElementReference)

			function recurSetSelectionElement(selectionElementNew: i.SelectionElement, selectionElementReference: i.SelectionElement) {
				/**
				 * For setting new selection element
				 */
				let newestJsonA: any = selectionElementNew
				let newestJsonB: any = selectionElementReference

				const keysA = Object.keys(newestJsonA).filter(notSelectionSpecialKey)
				const keysB = Object.keys(newestJsonB).filter(notSelectionSpecialKey)

				const keysRemoved: string[] = getRemovedKeys()
				const keysAdded: string[] = getAddedKeys()
				const keysSame: string[] = getSameKeys()

				keysRemoved.map(resolveRemovedKey)
				keysAdded.map(resolveAddedKey)
				keysSame.map(resolveSameKey)

				function getRemovedKeys() {
					let res: string[] = []

					keysA.map(getRemovedKey)

					function getRemovedKey(key: string) {
						if (!_.includes(keysB, key)) {
							res.push(key)
						}
					}
					return res
				}

				function getAddedKeys() {
					let res: string[] = []

					keysB.map(getAddedKey)

					function getAddedKey(key: string) {
						if (!_.includes(keysA, key)) {
							res.push(key)
						}
					}
					return res
				}

				function getSameKeys() {
					let res: string[] = _.intersection(keysA, keysB)
					return res
				}

				function resolveRemovedKey(key: string) {
					delete newestJsonA[key]
				}

				function resolveAddedKey(key: string) {
					newestJsonA[key] = newestJsonB[key]
				}

				function resolveSameKey(key: string) {
					const value = newestJsonB[key]

					if (_.isPlainObject( value )) {
						const _selectionElementNew = newestJsonA[key]
						const _selectionElementReference = value
						recurSetSelectionElement(_selectionElementNew, _selectionElementReference)
					}
				}
			}
		}

		return newSelection
	}
}
