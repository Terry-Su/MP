import * as PATH from 'path'
import { DOT_MP_CONFIG, SELECTION_JSON } from './constant'

export const selectionJsonPath = PATH.resolve( process.cwd(), `${ DOT_MP_CONFIG }/${ SELECTION_JSON }` )
