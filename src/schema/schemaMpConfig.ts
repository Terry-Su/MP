import { MpConfigKey } from '../store/constant'


/**
 * sync from schema>index>MpConfig
 */
export default {
	properties: {
		[ MpConfigKey.HideDefaultPrompt ]: {
			type: 'boolean'
		}
	}
}
