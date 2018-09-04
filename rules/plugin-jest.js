'use strict';

module.exports = {
	rules: {
		'jest/expect-expect': 'error',
		'jest/consistent-test-it': [
			'error',
			{fn: 'it'},
		],
		'jest/lowercase-name': 'off',
		'jest/no-disabled-tests': 'error',
		'jest/no-focused-tests': 'error',
		'jest/no-hooks': 'off',
		'jest/no-identical-title': 'error',
		'jest/no-jasmine-globals': 'error',
		'jest/no-jest-import': 'error',
		'jest/no-large-snapshots': 'off',
		'jest/no-test-prefixes': 'off', // these are not allowed anyways
		'jest/no-test-return-statement': 'error',
		'jest/prefer-expect-assertions': 'off', // would be nice to have
		'jest/prefer-to-have-length': 'error',
		'jest/prefer-to-be-null': 'error',
		'jest/prefer-to-be-undefined': 'error',
		'jest/prefer-inline-snapshots': 'error',
		'jest/prefer-strict-equal': 'error',
		'jest/valid-describe': 'error',
		'jest/valid-expect': 'error',
		'jest/valid-expect-in-promise': 'error',
	},
};
