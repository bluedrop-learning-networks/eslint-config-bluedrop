const {version} = require('.');
const library = require('./src/recommended/library');

module.exports = [
	...library,
	{
		// global ignores
		ignores: ['bin/*', 'scratch**'],
	},
	{
		rules: {
			'security/detect-non-literal-require': 'off',
			'security/detect-non-literal-regexp': 'off',
			'n/no-unpublished-require': 'off',
			'jsdoc/no-undefined-types': 'off',
		},
	},
	{
		files: ['scripts/*.js'],
		rules: {
			'no-console': 'off',
		},
	},
];
