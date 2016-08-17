module.exports = {
	rules: {
		'react/jsx-boolean-value': [2, 'never'],
		'react/jsx-closing-bracket-location': [1, {'location': 'after-props'}],
		'react/jsx-curly-spacing': [2, 'never'],
		'react/jsx-equals-spacing': [2, 'never'],
		'react/jsx-handler-names': [1, {
			'eventHandlerPrefix': 'handle',
			'eventHandlerPropPrefix': 'on'
		}],
		'react/jsx-indent-props': [1, 4],
		'react/jsx-indent': 1,
		'react/jsx-key': 2,
		'react/jsx-max-props-per-line': 0,
		'react/jsx-no-bind': 0,
		'react/jsx-no-duplicate-props': [2, {
			'ignoreCase': true
		}],
		'react/jsx-no-literals': 0,
		'react/jsx-no-undef': 2,
		'react/jsx-pascal-case': 2,
		'react/jsx-sort-props': 0,
		'react/jsx-space-before-closing': [1, 'never'],
		'react/jsx-uses-react': 2,
		'react/jsx-uses-vars': 1,
		'react/jsx-wrap-multilines': 2
	}
}
