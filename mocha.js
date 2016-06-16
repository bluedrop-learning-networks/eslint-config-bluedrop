'use strict';

module.exports = {
	env: {
		mocha: true
	},
	extends: [
		'./index'
	].map(require.resolve),
	globals: {
		expect: true
	},
	rules: {
		// mocha doesn't really support arrow functions
		'prefer-arrow-callback': 'off',
		// chai uses what appears to be unused expressions
		'no-unused-expressions': 'off'
	}
};
