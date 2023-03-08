module.exports = {
	files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mtsx}'],
	languageOptions: {
		ecmaVersion: 2022,
		sourceType: 'module',
		parserOptions: {
			ecmaFeatures: {
				globalReturn: true,
				implicitStrict: false,
				jsx: true,
			},
		},
		// This needs a home in the new standard
		// x env: {
		// x 	browser: true,
		// x },
		globals: [
			require('globals'),
		].map(
			globals => ({
				...globals.serviceworker,
				...Object.fromEntries(
					Object.entries(
						globals.browser,
					).map(
						([k, v]) => [k.trim(), v],
					),
				),
			}),
		)[0],
	},
	rules: {
		'class-methods-use-this': [
			'error',
			{
				exceptMethods: [
					'componentDidCatch',
					'componentDidMount',
					'componentDidUpdate',
					'componentWillMount',
					'componentWillReceiveProps',
					'componentWillUnmount',
					'componentWillUpdate',
					'render',
					'shouldComponentUpdate',
				],
			},
		],
		'no-invalid-this': 'off', // React components often use this in a way that ESLint flags as invalid
	},
};
