import * as PATH from 'path'
import { DOT_MP_CONFIG, SELECTION_JSON } from './constant'

export const getRootPath = () => process.cwd()
export const getSelectionJsonPath = () => PATH.resolve( getRootPath(), `${ DOT_MP_CONFIG }/${ SELECTION_JSON }` )

