'use strict';

// used to find unused rules

module.exports = {
	root: true,
	plugins: [
		'babel',
		'chai-expect',
		'filenames',
		'jest',
		'mocha',
		'node',
		'promise',
		'react',
		'security',
	],
	extends: [
		'../rules/best-practices.js',
		'../rules/ecmascript-6.js',
		'../rules/ecmascript-8.js',
		'../rules/ecmascript-9.js',
		'../rules/node-and-common.js',
		'../rules/plugin-babel.js',
		'../rules/plugin-chai-expect.js',
		'../rules/plugin-filenames.js',
		'../rules/plugin-jest.js',
		'../rules/plugin-mocha.js',
		'../rules/plugin-node.js',
		'../rules/plugin-promise.js',
		'../rules/plugin-react.js',
		'../rules/plugin-security.js',
		'../rules/possible-errors.js',
		'../rules/strict-mode.js',
		'../rules/stylistic-issues.js',
		'../rules/variables.js',
	].map(require.resolve),
};
