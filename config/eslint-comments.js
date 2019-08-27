'use strict';

module.exports = {
	plugins: [
		'eslint-comments',
	],
	extends: [
		'../rules/plugin-eslint-comments',
	].map(require.resolve),
};
