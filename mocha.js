'use strict';

module.exports = {
	plugins: [
		'mocha',
	],
	env: {
		mocha: true,
	},
	extends: [
		'./index',
		'./rules/plugin-mocha',
	].map(require.resolve),
	globals: {
		expect: true,
	},
	rules: {
		// mocha doesn't really support arrow functions
		'prefer-arrow-callback': 'off',
		// chai uses what appears to be unused expressions
		'no-unused-expressions': 'off',
	},
};
