'use strict';

module.exports = {
	env: {
		node: true,
		es6: true
	},
	extends: [
		'./rules/best-practices',
		'./rules/custom',
		'./rules/ecmascript-6',
		'./rules/node-and-common',
		'./rules/possible-errors',
		'./rules/strict-mode',
		'./rules/stylistic-issues',
		'./rules/variables'
	].map(require.resolve)
};
