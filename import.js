module.exports = {
	settings: {
		'import/resolver': 'webpack'
	},
	rules: {
		// Static analysis:
		'import/no-unresolved': [2, { commonjs: true }],
		'import/named': 2,
		'import/default': 2,
		'import/namespace': 2,
		'import/no-restricted-paths': 0,

		// Helpful warnings:
		'import/export': 2,
		'import/no-named-as-default': 2,
		'import/no-named-as-default-member': 2,
		'import/no-deprecated': 0,
		'import/no-extraneous-dependencies': 2,
		'import/no-mutable-exports': 2,

		// Module systems:
		'import/no-commonjs': 2,
		'import/no-amd': 2,
		'import/no-nodejs-modules': 2,

		// Style guide:
		'import/imports-first': 2,
		'import/no-duplicates': 2,
		'import/no-namespace': 0,
		'import/extensions': [2, {'js': 'never'}],
		'import/order': [2, {'newlines-between': 'always', 'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']}],
		'import/newline-after-import': 2,
		'import/prefer-default-export': 2
	}
};
