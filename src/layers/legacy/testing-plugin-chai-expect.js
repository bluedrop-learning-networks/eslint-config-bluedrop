const chai = require('eslint-plugin-chai-expect');

module.exports = {
	files: ['test/**/*.js'],
	languageOptions: {
		globals: {
			chai: 'readonly',
			expect: 'readonly',
		},
	},
	plugins: {'chai-expect': chai},
	rules: {
		'chai-expect/no-inner-compare': 'error',
		'chai-expect/no-inner-literal': 'error',
		'chai-expect/missing-assertion': 'error',
		'chai-expect/terminating-properties': 'error',
		'no-unused-expressions': 'off', // Chai uses what appears to be unused expressions
	},
};
