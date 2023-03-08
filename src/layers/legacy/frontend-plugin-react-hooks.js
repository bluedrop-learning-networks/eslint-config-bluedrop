const hooks = require('eslint-plugin-react-hooks');

module.exports = {
	files: ['**/*.{js,jsx,mjs,cjs,ts,tsx,mtsx}'],
	plugins: {'react-hooks': hooks},
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'error',
	},
};
