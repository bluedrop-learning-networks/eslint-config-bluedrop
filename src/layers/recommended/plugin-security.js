const security = require('eslint-plugin-security');

const makeErrors = object => Object.fromEntries(
	Object.entries(object)
		.map(([k, v]) => [
			k,
			v === 'warn' && 'error' || v,
		])
);

const rules = makeErrors(security.configs.recommended.rules);
module.exports = {plugins: {security}, rules};
