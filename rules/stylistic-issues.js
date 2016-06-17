'use strict';

module.exports = {
	rules: {
		'array-bracket-spacing': [
			'error',
			'never',
			{singleValue: false}
		],
		'block-spacing': 'error',
		'brace-style': [
			'error',
			'stroustrup',
			{allowSingleLine: true}
		],
		camelcase: [
			'error',
			{properties: 'always'}
		],
		'comma-spacing': 'error',
		'comma-style': 'error',
		'computed-property-spacing': 'error',
		'consistent-this': [
			'error',
			'self'
		],
		'eol-last': 'error',
		'func-names': 'off',
		'func-style': 'off',
		'id-blacklist': 'off',
		'id-length': 'off',
		'id-match': 'off',
		indent: [
			'error',
			'tab',
			{SwitchCase: 1}
		],
		'jsx-quotes': 'off',
		'key-spacing': 'error',
		'keyword-spacing': [
			'error',
			{
				before: false,
				after: true
			}
		],
		'linebreak-style': 'error',
		'lines-around-comment': 'off',
		'max-depth': 'error',
		'max-len': 'off',
		'max-nested-callbacks': 'off',
		'max-params': 'off',
		'max-statements': 'off',
		'max-statements-per-line': 'off',
		'new-cap': 'error',
		'new-parens': 'error',
		'newline-after-var': 'off',
		'newline-before-return': 'off',
		'newline-per-chained-call': [
			'error',
			{ignoreChainWithDepth: 4}
		],
		'no-array-constructor': 'error',
		'no-bitwise': 'error',
		'no-continue': 'off',
		'no-inline-comments': 'off',
		'no-lonely-if': 'error',
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		],
		'no-multiple-empty-lines': 'error',
		'no-negated-condition': 'error',
		'no-nested-ternary': 'error',
		'no-new-object': 'error',
		'no-plusplus': 'off',
		'no-restricted-syntax': 'off',
		'no-spaced-func': 'error',
		'no-ternary': 'off',
		'no-trailing-spaces': [
			'error',
			{skipBlankLines: true}
		],
		'no-underscore-dangle': 'off',
		'no-unneeded-ternary': 'error',
		'no-whitespace-before-property': 'error',
		'object-curly-spacing': 'error',
		'one-var': [
			'error',
			'never'
		],
		'one-var-declaration-per-line': 'error',
		'operator-assignment': 'off',
		'operator-linebreak': [
			'error',
			'before'
		],
		'padded-blocks': [
			'error',
			'never'
		],
		'quote-props': [
			'error',
			'as-needed'
		],
		quotes: [
			'error',
			'single',
			{
				avoidEscape: true,
				allowTemplateLiterals: true
			}
		],
		'require-jsdoc': 'off',
		semi: 'error',
		'semi-spacing': 'error',
		'sort-imports': 'off',
		'sort-vars': 'off',
		'space-before-blocks': 'error',
		'space-before-function-paren': [
			'error',
			{
				anonymous: 'always',
				named: 'never'
			}
		],
		'space-in-parens': 'error',
		'space-infix-ops': 'error',
		'space-unary-ops': 'error',
		'spaced-comment': 'error',
		'wrap-regex': 'error'
	}
};
