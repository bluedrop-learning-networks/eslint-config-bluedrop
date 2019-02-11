'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 6,
		sourceType: 'script',
		ecmaFeatures: {
			globalReturn: true,
			implicitStrict: false,
			jsx: false,
			experimentalObjectRestSpread: false,
		},
	},
	plugins: [
		'filenames',
		'promise',
		'security',
		'jsdoc',
	],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	extends: [
		'../rules/best-practices',
		'../rules/ecmascript-6',
		'../rules/plugin-jsdoc',
		'../rules/plugin-filenames',
		'../rules/plugin-promise',
		'../rules/plugin-security',
		'../rules/possible-errors',
		'../rules/strict-mode',
		'../rules/stylistic-issues',
		'../rules/variables',
	].map(require.resolve),
};
