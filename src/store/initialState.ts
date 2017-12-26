import * as PATH from 'path'
import { DOT_MP_CONFIG, SELECTION_JSON } from './constant'

export const getSelectionJsonPath = () => PATH.resolve( process.cwd(), `${ DOT_MP_CONFIG }/${ SELECTION_JSON }` )
