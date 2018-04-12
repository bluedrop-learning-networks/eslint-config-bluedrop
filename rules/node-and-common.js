'use strict';

module.exports = {
	rules: {
		'callback-return': [
			'error',
			['callback', 'cb', 'next', 'done'],
		],
		'global-require': 'off',
		'handle-callback-err': 'error',
		'no-buffer-constructor': 'error',
		'no-mixed-requires': 'error',
		'no-new-require': 'error',
		'no-path-concat': 'error',
		'no-process-env': 'error',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-sync': 'error',
	},
};
