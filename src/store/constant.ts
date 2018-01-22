// ****** Folder name ******
export const DOT_MP_CONFIG = ".mpconfig"

// ****** File name ******
export const SELECTION_JSON = "selection.json"
export const NODE_CONFIG = "nodeconfig"

// ******  Format ******
export const NODE_CONFIG_EXTENSION = ".js"

// ******  Selection   ******
export const SelectionKey = {
	SELF: "/:self",
	ALL : "/:all"
}

// ******  Mp config  ******
export const MP_CONFIG_JS = "mp.config.js"
export const DOT_MP_CONFIG_JSON = ".mpconfig.json"

export enum MpConfigKey {
	HIDE_DEFAULT_PROMPT = "hideDefaultPrompt"
}


// ******  Node config  ******
export const NODE_CONFIG_FULL_PATH_NAME = `${ NODE_CONFIG }${ NODE_CONFIG_EXTENSION }`


// ******  Prompt  ******
export enum ChoicePromptUpdateProjectKey {
	CONTINUE = "Already set, continue",
	RESET = "Reset all selection",
	HIDE = 'Do not show this anymore(Set "shouldPrompt" to true in mp.config.js to show this again) and continue'
}
