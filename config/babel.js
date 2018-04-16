'use strict';

module.exports = {
	plugins: [
		'babel',
	],
	parser: 'babel-eslint',
	extends: [
		'../rules/plugin-babel',
	].map(require.resolve),
};
