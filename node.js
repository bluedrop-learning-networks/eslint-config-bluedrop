'use strict';

module.exports = {
	plugins: [
	],
	env: {
		node: true,
	},
	extends: [
		'./index',
	].map(require.resolve),
};
