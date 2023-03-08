const node = require('eslint-plugin-node');

module.exports = {
	files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mtsx}'],
	plugins: {node},
	rules: {
		'node/no-unsupported-features/es-syntax': [
			'error',
			{
				ignores: ['modules', 'dynamicImport'],
			},
		],
	},
};
