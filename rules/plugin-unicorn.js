'use strict';

// https://github.com/sindresorhus/eslint-plugin-unicorn

module.exports = {
	rules: {
		'unicorn/catch-error-name': 'off', // allow us to use err / error
		'unicorn/custom-error-definition': 'off',
		'unicorn/error-message': 'error',
		'unicorn/escape-case': 'off',
		'unicorn/explicit-length-check': 'off',
		'unicorn/filename-case': 'off',
		'unicorn/import-index': 'error',
		'unicorn/new-for-builtins': 'error',
		'unicorn/no-abusive-eslint-disable': 'off', // let eslint-comments take care of this
		'unicorn/no-array-instanceof': 'error',
		'unicorn/no-console-spaces': 'error',
		'unicorn/no-fn-reference-in-iterator': 'off',
		'unicorn/no-for-loop': 'error',
		'unicorn/no-hex-escape': 'off',
		'unicorn/no-keyword-prefix': 'off',
		'unicorn/no-new-buffer': 'off', // let eslint take care of this
		'unicorn/no-process-exit': 'off', // let eslint take care of this
		'unicorn/no-unreadable-array-destructuring': 'error',
		'unicorn/no-unsafe-regex': 'off',
		'unicorn/no-unused-properties': 'off',
		'unicorn/no-zero-fractions': 'off',
		'unicorn/number-literal-case': 'off',
		'unicorn/prefer-add-event-listener': 'error',
		'unicorn/prefer-event-key': 'error',
		'unicorn/prefer-exponentiation-operator': 'error',
		'unicorn/prefer-flat-map': 'error',
		'unicorn/prefer-includes': 'error',
		'unicorn/prefer-node-append': 'error',
		'unicorn/prefer-node-remove': 'error',
		'unicorn/prefer-query-selector': 'off',
		'unicorn/prefer-spread': 'error',
		'unicorn/prefer-starts-ends-with': 'error',
		'unicorn/prefer-text-content': 'error',
		'unicorn/prefer-type-error': 'off',
		'unicorn/prevent-abbreviations': 'off', // prefers 'database' over 'db', 'fooObject' over 'fooObj'
		'unicorn/regex-shorthand': 'off',
		'unicorn/throw-new-error': 'off', // let eslint take care of this
	},
};
