'use strict';

module.exports = {
	parserOptions: {
		ecmaVersion: 10,
	},
	extends: [
		'./ecmascript-2018',
	].map(require.resolve),
};
