'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 8,
	},
	extends: [
		'./ecmascript-7',
		'../rules/ecmascript-8',
	].map(require.resolve),
};
