const mocha = require('eslint-plugin-mocha');

module.exports = {
	files: ['test/**/*.js', 'test/**/*.mjs'],
	languageOptions: {
		globals: {
			after: 'readonly',
			afterEach: 'readonly',
			beforeEach: 'readonly',
			describe: 'readonly',
			it: 'readonly',
		},
	},
	plugins: {mocha},
	rules: {
		'mocha/handle-done-callback': 'error',
		'mocha/max-top-level-suites': 'error',
		'mocha/no-async-describe': 'error',
		'mocha/no-exclusive-tests': 'error',
		'mocha/no-global-tests': 'error',
		'mocha/no-hooks': 'off',
		'mocha/no-hooks-for-single-case': 'error',
		'mocha/no-identical-title': 'error',
		'mocha/no-mocha-arrows': 'error',
		'mocha/no-nested-tests': 'error',
		'mocha/no-pending-tests': 'error',
		'mocha/no-return-and-callback': 'error',
		'mocha/no-return-from-async': 'error',
		'mocha/no-setup-in-describe': 'off',
		'mocha/no-sibling-hooks': 'error',
		'mocha/no-skipped-tests': 'error',
		'mocha/no-synchronous-tests': 'off',
		'mocha/no-top-level-hooks': 'error',
		'mocha/prefer-arrow-callback': 'error',
		'mocha/valid-suite-description': 'off',
		'mocha/valid-test-description': 'error',
		'prefer-arrow-callback': 'off', // Mocha doesn't really support arrow functions
		'node/no-sync': 'off', // It is common to use sync functions in tests
		'security/detect-non-literal-fs-filename': 'off', // This is not an issue in tests
		'filenames/match-regex': 'off', // Filenames should match the file they are testing
	},
};
