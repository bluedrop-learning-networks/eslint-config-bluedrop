'use strict';

module.exports = {
	plugins: [
		'node',
	],
	env: {
		node: true,
	},
	extends: [
		'../rules/node-and-common',
		'../rules/plugin-node',
	].map(require.resolve),
};
