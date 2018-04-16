'use strict';

module.exports = {
	rules: {
		'node/no-extraneous-import': 'error',
		'node/no-extraneous-require': 'error',
		'node/no-missing-import': 'error',
		'node/no-missing-require': 'error',
		'node/no-unpublished-bin': 'error',
		'node/no-unpublished-import': 'off',
		'node/no-unpublished-require': 'off',
		'node/no-unsupported-features': 'error',
		'node/process-exit-as-throw': 'error',
		'node/shebang': 'error',
		'node/no-deprecated-api': 'error',
		'node/exports-style': [
			'error',
			'module.exports',
		],
	},
};
