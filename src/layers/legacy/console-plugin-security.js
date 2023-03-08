const security = require('eslint-plugin-security');

module.exports = {
	plugins: {security},
	rules: {
		'security/detect-child-process': 'off',
		'security/detect-non-literal-fs-filename': 'off',
		'security/detect-unsafe-regex': 'off',
	},
};
