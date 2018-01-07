import * as _ from 'lodash'

import { SelectionKey } from '../store/constant'


export default function ( key: string ): boolean {
	return ! ( key in SelectionKey )
}
