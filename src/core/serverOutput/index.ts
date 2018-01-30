import * as browserSync from 'browser-sync'
import * as PATH from 'path'

const bs = browserSync.create()

import { defaultNodeConfig } from '../../store/initialState'
import { getMpConfig } from '../../store/index';
import { OuterMpConfig } from '../../interface/index';
import { MpConfigKey } from '../../store/constant'
import { getRootPath } from '../../store/shared/index';


const { OUTPUT, OPEN_SERVER, SERVER_PORT } = MpConfigKey
const rootPath = getRootPath()

export default function () {
	const mpConfig: any = getMpConfig()
	const output = PATH.resolve( mpConfig[ OUTPUT ], rootPath )
	const config = {
		server: {
		  baseDir: output,
		  directory: true,
		},
		files: [`${output}/**`],
		open: mpConfig[ OPEN_SERVER ],
		port: mpConfig[ SERVER_PORT ]
	  }

	  bs.init(config)
}
