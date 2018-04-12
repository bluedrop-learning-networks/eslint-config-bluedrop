'use strict';

module.exports = {
	rules: {
		'babel/new-cap': 'error',
		'babel/no-invalid-this': 'error',
		'babel/object-curly-spacing': 'error',
		'babel/quotes': [
			'error',
			'single',
			{
				avoidEscape: true,
			},
		],
		'babel/semi': 'error',
	},
};
