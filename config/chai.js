'use strict';

module.exports = {
	plugins: [
		'chai-expect',
	],
	globals: {
		expect: true,
		chai: true,
	},
	extends: [
		'../rules/plugin-chai-expect',
	].map(require.resolve),
	rules: {
		// chai uses what appears to be unused expressions
		'no-unused-expressions': 'off',
	},
};
