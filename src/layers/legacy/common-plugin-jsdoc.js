const jsdoc = require('eslint-plugin-jsdoc');

module.exports = {
	plugins: {jsdoc},
	rules: {
		// JSDoc eslint rules conflict with documentation.js
		'jsdoc/check-examples': 'off',
		'jsdoc/check-types': 'off',
	},
};
