'use strict';

module.exports = {
	rules: {
		'callback-return': [
			'error',
			['callback', 'cb', 'next', 'done']
		],
		'global-require': 'off',
		'handle-callback-err': 'error',
		'no-mixed-requires': 'off',
		'no-new-require': 'error',
		'no-path-concat': 'off',
		'no-process-env': 'off',
		'no-process-exit': 'error',
		'no-restricted-modules': 'off',
		'no-sync': 'error'
	}
};
