// ****** Folder name ******
export const DOT_MP_CONFIG = ".mpconfig"
export const OUTPUT_DIRECTORY = "build"

// ****** File name ******
export const SELECTION_JSON = "selection.json"
export const NODE_CONFIG = "nodeconfig"

// ******  Format ******
export const NODE_CONFIG_EXTENSION = ".js"

// ******  Selection   ******
export const SelectionKey = {
	SELF: "/self",
	ALL : "/all"
}

// ******  Mp config  ******
export const MP_CONFIG_JS = "mp.config.js"
export const DOT_MP_CONFIG_JSON = ".mpconfig.json"

export enum MpConfigKey {
	HIDE_DEFAULT_PROMPT = "hideDefaultPrompt",
	OUTPUT = "output",
	SRC = "src",
	SERVER_PORT = "serverPort",
	OPEN_SERVER = "openServer",
}


// ******  Node config  ******
export const NODE_CONFIG_FULL_PATH_NAME = `${ NODE_CONFIG }${ NODE_CONFIG_EXTENSION }`

export enum NodeConfigKey {
	USE_WEBPACK = "useWebpack",
	WEBPACK_CONFIG = "webpackConfig",
	WEBPACK_CONFIG_PATH = "webpackConfigPath",
}


// ******  Prompt  ******
export enum ChoicePromptUpdateProjectKey {
	CONTINUE = "Already set, continue",
	RESET = "Reset all selection",
	HIDE = 'Do not show this anymore(Set "shouldPrompt" to "true" in mp.config.js to show this again) and continue'
}
