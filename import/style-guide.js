module.exports = {
    rules: {
        'import/first': ['error', 'absolute-first'],
        'import/no-duplicates': 'error',
        'import/no-namespace': 'off',
        'import/extensions': ['error', 'always', { js: 'never', jsx: 'never' }],
        'import/order': [
            'error',
            {
                'newlines-between': 'always',
                groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index']
            }
        ],
        'import/newline-after-import': 'error',
        'import/prefer-default-export': 'error',
        'import/max-dependencies': ['off', { max: 10 }],
        'import/no-unassigned-import': 'off',
        'import/no-named-default': 'error',
        'import/no-anonymous-default-export': 'off'
    }
};
