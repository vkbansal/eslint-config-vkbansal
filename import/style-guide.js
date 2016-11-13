module.exports = {
	rules: {
		'import/first': 2,
		'import/no-duplicates': 2,
		'import/no-namespace': 0,
		'import/extensions': [2, {'js': 'never'}],
		'import/order': [2, {
			'newlines-between': 'always',
			'groups': ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
		}],
		'import/newline-after-import': 2,
		'import/prefer-default-export': 2,
		'import/max-dependencies': 0,
		'import/no-unassigned-import': 2,
		'import/no-named-default': 0
	}
};
