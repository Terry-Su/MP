import * as _ from 'lodash'

import { SelectionKey } from '../store/constant'


export default function ( key: string ): boolean {
	const res = ! _.includes( _.values( SelectionKey ), key )
	return res
}
