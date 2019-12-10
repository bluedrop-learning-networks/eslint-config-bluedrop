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
		'eslint-comments',
		'filenames',
		'import',
		'jsdoc',
		'promise',
		'security',
		'unicorn',
	],
	env: {
		'shared-node-browser': true,
		es6: true,
	},
	extends: [
		'../rules/best-practices',
		'../rules/ecmascript-2015',
		'../rules/ecmascript-2017',
		'../rules/plugin-eslint-comments',
		'../rules/plugin-filenames',
		'../rules/plugin-import',
		'../rules/plugin-jsdoc',
		'../rules/plugin-promise',
		'../rules/plugin-security',
		'../rules/plugin-unicorn',
		'../rules/possible-errors',
		'../rules/strict-mode',
		'../rules/stylistic-issues',
		'../rules/variables',
	].map(require.resolve),
};
