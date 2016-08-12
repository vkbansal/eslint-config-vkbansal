let rules = {
	// Static analysis:
	"import/no-unresolved": ["error", { commonjs: true }],
	"import/named": "error",
	"import/default": "error",
	"import/namespace": "error",
	"import/no-restricted-paths": "off",

	// Helpful warnings:
	"import/export": "error",
	"import/no-named-as-default": "error",
	"import/no-named-as-default-member": "error",
	"import/no-deprecated": "off",
	"import/no-extraneous-dependencies": "error",
	"import/no-mutable-exports": "error",

	// Module systems:
	"import/no-commonjs": "error",
	"import/no-amd": "error",
	"import/no-nodejs-modules": "error",

	// Style guide:
	"import/imports-first": "error",
	"import/no-duplicates": "error",
	"import/no-namespace": "off",
	"import/extensions": ["error", {"js": "never"}],
	"import/order": "error",
	"import/newline-after-import": "error",
	"import/prefer-default-export": "error"
};

let settings = {
	"import/resolver": "webpack"
};

module.exports = { rules, settings };
