'use strict';

// ECMAScript - 2018
module.exports = {
	parserOptions: {
		ecmaVersion: 9,
	},
	extends: [
		'../rules/ecmascript-2018',
	].map(require.resolve),
};
