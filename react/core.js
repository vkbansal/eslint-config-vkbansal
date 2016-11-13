module.exports = {
	rules: {
		'react/display-name': 1,
		'react/forbid-component-props': 0,
		'react/forbid-prop-types': 0,
		'react/no-children-prop': 2,
		'react/no-danger': 2,
		'react/no-danger-with-children': 2,
		'react/no-deprecated': 1,
		'react/no-did-mount-set-state': 2,
		'react/no-did-update-set-state': 2,
		'react/no-direct-mutation-state': 2,
		'react/no-find-dom-node': 1,
		'react/no-is-mounted': 2,
		'react/no-multi-comp': [2, {'ignoreStateless': true}],
		'react/no-render-return-value': 2,
		'react/jsx-tag-spacing': [2, {
			'closingSlash': 'always',
			'beforeSelfClosing': 'always',
			'afterOpening': 'never'
		}],
		'react/no-set-state': 0,
		'react/no-string-refs': 2,
		'react/no-unescaped-entities': 2,
		'react/no-unknown-property': 2,
		'react/no-unused-prop-types': 0,
		'react/prefer-es6-class': 2,
		'react/prefer-stateless-function': 1,
		'react/prop-types': 0,
		'react/react-in-jsx-scope': 2,
		'react/require-optimization': 0,
		'react/require-render-return': 2,
		'react/self-closing-comp': 2,
		'react/sort-comp': 2,
		'react/sort-prop-types': [2, { 'ignoreCase': true, 'callbacksLast': true, 'requiredFirst': true}],
		'react/style-prop-object': 2
	}
};
