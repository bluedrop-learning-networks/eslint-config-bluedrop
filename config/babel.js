'use strict';

module.exports = {
	parserOptions: {
		parser: '@babel/eslint-parser',
		requireConfigFile: false,
	},
	extends: [
		'../rules/plugin-babel',
	].map(require.resolve),
};
