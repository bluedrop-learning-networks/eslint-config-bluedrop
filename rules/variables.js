'use strict';

module.exports = {
	rules: {
		'init-declarations': 'off',
		'no-delete-var': 'off',
		'no-label-var': 'error',
		'no-restricted-globals': 'off',
		'no-shadow': [
			'error',
			{
				allow: ['trx'], // shadow db transaction
			},
		],
		'no-shadow-restricted-names': 'error',
		'no-undef': 'error',
		'no-undef-init': 'error',
		'no-undefined': 'off',
		'no-unused-vars': [
			'error', {
				ignoreRestSiblings: true,
				argsIgnorePattern: '^_',
			},
		],
		'no-use-before-define': 'error',
	},
};
