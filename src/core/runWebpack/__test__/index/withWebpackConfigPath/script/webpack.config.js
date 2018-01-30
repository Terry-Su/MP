const PATH = require("path");

module.exports = {
	entry: PATH.resolve(__dirname, "../entry.js"),
	output: {
		path: PATH.resolve(__dirname, "../"),
		filename: "bundle.js"
	}
};
