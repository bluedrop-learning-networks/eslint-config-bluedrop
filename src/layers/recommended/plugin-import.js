const imp0rt = require('eslint-plugin-import');

const rules = imp0rt.configs.recommended.rules;
module.exports = {
	plugins: {import: imp0rt},
	rules,
};
