'use strict';

module.exports = {
	plugins: [
		'node',
	],
	env: {
		node: true,
	},
	extends: [
		'../rules/plugin-node',
	].map(require.resolve),
};
