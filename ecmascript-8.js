'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 8,
	},
	extends: [
		'./rules/ecmascript-8',
	].map(require.resolve),
};
