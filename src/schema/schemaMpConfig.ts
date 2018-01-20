import { MpConfigKey } from '../store/constant'


/**
 * sync from schema>index>MpConfig
 */
export default {
	properties: {
		[ MpConfigKey.HIDE_DEFAULT_PROMPT ]: {
			type: 'boolean'
		}
	}
}
