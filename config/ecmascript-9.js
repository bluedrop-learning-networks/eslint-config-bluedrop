'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 9,
	},
	extends: [
		'./ecmascript-8',
		'../rules/ecmascript-9',
	].map(require.resolve),
};
