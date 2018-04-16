'use strict';

module.exports = {
	plugins: [
		'mocha',
	],
	env: {
		mocha: true,
	},
	extends: [
		'../rules/plugin-mocha',
	].map(require.resolve),
	globals: {
		expect: true,
	},
	rules: {
		// mocha doesn't really support arrow functions
		'prefer-arrow-callback': 'off',
		// it is common to use sync functions in tests
		'no-sync': 'off',
		// this is not an issue in tests
		'security/detect-non-literal-fs-filename': 'off',
		// filenames should match the file they are testing
		'filenames/match-regex': 'off',
	},
};
