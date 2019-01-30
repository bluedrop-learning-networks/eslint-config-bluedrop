'use strict';

module.exports = {
	plugins: [
		'jsdoc',
	],
	extends: [
		'../rules/plugin-jsdoc',
	].map(require.resolve),
};
