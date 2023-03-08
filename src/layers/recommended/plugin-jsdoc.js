const jsdoc = require('eslint-plugin-jsdoc');

const rules = jsdoc.configs['recommended-error'].rules;
module.exports = {
	plugins: {jsdoc},
	rules,
};
