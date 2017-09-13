'use strict';

module.exports = {
	plugins: [
		'jest',
	],
	env: {
		'jest/globals': true,
	},
	extends: [
		'./index',
		'./rules/plugin-jest',
	].map(require.resolve),
	rules: {
		'filenames/match-regex': [
			'error',
			/^[A-Za-z0-9.-]+$/,
		],
	},
};
