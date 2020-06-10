'use strict';

module.exports = {
	rules: {
		// Possible Errors
		'node/handle-callback-err': 'error',
		'node/no-callback-literal': 'error',
		'node/no-exports-assign': 'error',
		'node/no-extraneous-import': 'error',
		'node/no-extraneous-require': 'error',
		'node/no-missing-import': 'error',
		'node/no-missing-require': 'error',
		'node/no-new-require': 'error',
		'node/no-path-concat': 'error',
		'node/no-process-exit': 'error',
		'node/no-unpublished-bin': 'error',
		'node/no-unpublished-import': 'off',
		'node/no-unpublished-require': 'off',
		'node/no-unsupported-features/es-builtins': 'error',
		'node/no-unsupported-features/es-syntax': ['error', {
			ignores: ['modules', 'dynamicImport'],
		}],
		'node/no-unsupported-features/node-builtins': 'error',
		'node/process-exit-as-throw': 'error',
		'node/shebang': 'error',

		// Best Practices
		'node/no-deprecated-api': 'error',

		// Stylistic Issues
		'node/callback-return': [
			'error',
			['callback', 'cb', 'next', 'done'],
		],
		'node/exports-style': [
			'error',
			'module.exports',
		],
		'node/file-extension-in-import': 'off',
		'node/global-require': 'off',
		'node/no-mixed-requires': 'error',
		'node/no-process-env': 'error',
		'node/no-restricted-import': 'off',
		'node/no-restricted-require': 'off',
		'node/no-sync': 'error',
		'node/prefer-global/buffer': 'error',
		'node/prefer-global/console': 'error',
		'node/prefer-global/process': 'error',
		'node/prefer-global/text-decoder': 'error',
		'node/prefer-global/text-encoder': 'error',
		'node/prefer-global/url-search-params': 'error',
		'node/prefer-global/url': 'error',
		'node/prefer-promises/dns': 'error',
		'node/prefer-promises/fs': 'error',
	},
};
